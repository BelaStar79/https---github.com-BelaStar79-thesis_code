import React, { useState } from "react";
// import css
import "../../components/structure/mainStructure.css";
import "../../components/formComponent/formComponent.css";
// import components
import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import TitleBar from "../../components/titleBar/TitleBar.jsx";
import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// others imports
import { useNavigate } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";
import { id_row, guard_area } from "../../components/others/table.js";

export default function EditGuardArea() {
  // editable variables
  const namePage = "Modificar zona de guardia";
  const activeSection = "planning";
  const activeOption = "Zonas de guardia";

  // get data of planificaciones
  const ga = guard_area[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToPGuardArea = () => {
    navigate("/planning/guard-area");
  };

  // save guard area
  const saveGuardArea = () => {
    console.log("Guardando datos...");
    goToPGuardArea();
  };

  return (
    <>
      <div className="pageStructure">
        <div className="pageStructure__companyBelt">
          <CompanyBelt />
        </div>
        <div className="pageStructure__bigContainer">
          <div className="pageStructure__sideMenu">
            <SideMenu
              activeSection={activeSection}
              activeOption={activeOption}
            />
          </div>
          <div className="pageStructure__container">
            <TitleBar
              title={namePage}
              titleBarButtons={
                <>
                  <button
                    className="titleBar__button"
                    title={`Regresar a ` + activeOption}
                    onClick={goToPGuardArea}
                  >
                    <BsBackspace className="titleBar__icon" />
                  </button>
                </>
              }
            />

            <section className="formComponent__bigContainer">
              <div className="formComponent__container">
                <div className="formComponent__add">
                  <form action="" className="formComponent__addForm">
                    <div className="formComponent__addFormContainer">
                      <div className="formComponent__addInput">
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre del responsable
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={ga.nombre}
                            title="Introduzca el nuevo nombre del responsable"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre de la estructura
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={ga.estructura}
                            title="Introduzca la nueva estructura"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={saveGuardArea}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToPGuardArea}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="pageStructure__footer">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// // import css
// import "../../components/structure/mainStructure.css";
// import "../../components/formComponent/formComponent.css";
// // import components
// import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
// import SideMenu from "../../components/sideMenu/SideMenu.jsx";
// import TitleBar from "../../components/titleBar/TitleBar.jsx";
// import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// // others imports
// import { useNavigate } from "react-router-dom";
// import { BsBackspace } from "react-icons/bs";

// export default function EditGuardArea() {
//   // editable variables
//   const namePage = "Editar zona de guardia";
//   const activeSection = "planning";
//   const activeOption = "Zona de guardia";

//   // inputs variables
//   const [nombre, setNombre] = useState();

//   // navigate metod
//   const navigate = useNavigate();
//   const goToGuardArea = () => {
//     navigate("/planning/guard-area");
//   };

//   return (
//     <>
//       <div className="pageStructure">
//         <div className="pageStructure__companyBelt">
//           <CompanyBelt />
//         </div>
//         <div className="pageStructure__bigContainer">
//           <div className="pageStructure__sideMenu">
//             <SideMenu
//               activeSection={activeSection}
//               activeOption={activeOption}
//             />
//           </div>
//           <div className="pageStructure__container">
//             <TitleBar
//               title={namePage}
//               titleBarButtons={
//                 <>
//                   <button
//                     className="titleBar__button"
//                     title="Regresar a Planificación"
//                     onClick={goToGuardArea}
//                   >
//                     <BsBackspace className="titleBar__icon" />
//                   </button>
//                 </>
//               }
//             />

//             <section className="formComponent__bigContainer">
//               <div className="formComponent__container">
//                 <div className="formComponent__add">
//                   <form action="" className="formComponent__addForm">
//                     <div className="formComponent__addFormContainer">
//                       <div className="formComponent__addInput">
//                         <label htmlFor="" className="formComponent__addLabel">
//                           Nombre de la zona
//                           <input
//                             value={nombre}
//                             type="text"
//                             className="formComponent__addInput"
//                             placeholder="Zona de guardia"
//                             title="Introduzca el nombre de la zona"
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//         <div className="pageStructure__footer">
//           <FooterComponent />
//         </div>
//       </div>
//     </>
//   );
// }
