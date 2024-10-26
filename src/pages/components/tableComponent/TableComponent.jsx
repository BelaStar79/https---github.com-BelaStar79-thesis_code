import React from "react";
import './tableComponent.css'
import { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight, CiRead, CiEdit, CiShare2, CiTrash } from "react-icons/ci";

const VISIBLE_PAGES_COUNT = 3; 

export default function TableComponent ({ rowsPerPage, columnNames, data }){
    
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [visiblePages, setVisiblePages] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [hasData, setHasData] = useState(false); 
    const [count, setCount] = useState(1);

    useEffect(() => { 
        const fetchData = async () => {
            try {
                await calculateTotalPages(); 
                await updateVisiblePages(); 
                setIsLoading(false); 
                setHasData(true); 
            } catch (error) {
                console.error("Error al cargar datos:", error); 
                setIsLoading(false); 
                setHasData(true); 
            }
        };

        fetchData();
    }, []); 

    const calculateTotalPages = () => { 
        const totalRows = data?.length || 0;
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        setTotalPages(totalPages);
    };

    const updateVisiblePages = () => {  
        if (!totalPages || totalPages <= VISIBLE_PAGES_COUNT) {
          setVisiblePages(Array.from({ length: totalPages }, (_, i) => i + 1));
        } else {
            let start = Math.max(1, currentPage - Math.floor(VISIBLE_PAGES_COUNT / 2)); 
            let end = Math.min(totalPages, start + VISIBLE_PAGES_COUNT - 1); 
          
            setVisiblePages(Array.from({ length: end - start + 1 }, (_, i) => start + i));
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
        setCount((prevCount) => (rowsPerPage * page) - (rowsPerPage - 1));
        updateVisiblePages();
    };

    const handlePrevious = () => { 
        if (currentPage > 1 && hasData) { 
            setCurrentPage(prevPage => prevPage - 1);
            setCount(prevCount => prevCount - rowsPerPage);
            updateVisiblePages();
        }
    };
    
    const handleNext = () => { 
        if (currentPage < totalPages && hasData) { 
            setCurrentPage(prevPage => prevPage + 1);
            setCount(prevCount => prevCount + rowsPerPage);
            updateVisiblePages();
        }
    };

    // Calcula el índice inicial y final de la página actual
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = currentPage * rowsPerPage;

    // Filtra los datos para mostrar solo las filas de la página actual
    const filteredData = data?.slice(startIndex, endIndex); 

    if (isLoading) { 
        return <div>Cargando...</div>;
    }

    if (!hasData) { 
        return <div>No hay datos disponibles</div>;
    }
    
    return (
        <div className="tableContainer">
            {filteredData.length > 0 ? (
                <>
                    <table className="tableComponent_table">
                        <thead className="tableComponent_thead">
                            <tr className="tableComponent_tr">
                            <th className="tableComponent_th tableComponent_th-number">No.</th>
                            {columnNames.map((columnName, index) => (
                                <th className="tableComponent_th" key={index}>{columnName}</th>
                            ))}
                            <th className="tableComponent_th tableComponent_th-options">Opciones</th>
                            </tr>
                        </thead>
                        <tbody className="tableComponent_tbody">
                            {filteredData.map((row, rowIndex) => (
                                <tr className="tableComponent_tr" key={rowIndex}>
                                    <td className="tableComponent_td">{count + rowIndex}</td>
                                    {columnNames.map((columnName, columnIndex) => (
                                        <td className="tableComponent_td" key={columnIndex}>{row[columnName]}</td>
                                    ))}
                                    <td className="tableComponent_td">
                                        <div className="tableComponent_tdOptions">
                                            <button 
                                                className="tableComponent_button"
                                                title="Vizualizar"
                                            >
                                                <CiRead className="tableComponent_buttonIcon" />
                                            </button>
                                            <button 
                                                className="tableComponent_button"
                                                title="Editar"
                                            >
                                                <CiEdit className="tableComponent_buttonIcon" />
                                            </button>
                                            <button 
                                                className="tableComponent_button"
                                                title="Exportar"
                                            >
                                                <CiShare2 className="tableComponent_buttonIcon" />
                                            </button>
                                            <button 
                                                className="tableComponent_button"
                                                title="Eliminar"
                                            >
                                                <CiTrash className="tableComponent_buttonIcon" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Paginación */}
                    <div className="tableContainer_pagination">
                        <button 
                            className="tableComponent_button" 
                            onClick={handlePrevious}
                            title="Página anterior"
                        >
                            <CiCircleChevLeft className="tableComponent_buttonIcon"/>
                        </button>
                    
                        {visiblePages.map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageClick(page)}
                                className={`page-btn ${page === currentPage ? 'tableComponent-pageActive' : ''} tableComponent_buttonNumber`}
                                title={'Ir a la página ' + page}
                            >
                                {page}
                            </button>
                        ))}

                        <button 
                            className="tableComponent_button" 
                            onClick={handleNext}
                            title="Página siguiente"
                        >
                            <CiCircleChevRight className="tableComponent_buttonIcon" />
                        </button>
                    </div>
                </>
            ) : (
                <p className="tableComponent_p">No hay datos disponibles</p>
            )}
        </div>
    );
}

