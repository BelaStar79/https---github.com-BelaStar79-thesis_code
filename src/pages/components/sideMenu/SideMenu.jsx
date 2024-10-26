import { CiCalendar, CiMemoPad, CiSettings, CiViewList, CiBarcode } from "react-icons/ci";
import {Accordion, AccordionItem} from "@nextui-org/react";
import './sideMenu.css'

export function SideMenu() {

  return (
    <Accordion className='sideMenu'>
      <AccordionItem 
        key="1" 
        className='sideMenu_accordionItem sideMenu_accordionItem-active' 
        aria-label="Planificación" 
        title={
            <div className='sideMenu_customHeader'> 
                <CiCalendar className='sideMenu_icon' />
                <span>Planificación</span>
            </div>
        }
      >
        <ul className="sideMenu_list">
            <li className="sideMenu_listItem sideMenu_listItem-active">
                <button className="sideMenu_buttonLink">
                    <a className="sideMenu_link" href="#">Planificación</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">Zonas de guardia</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">Postas</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">Grupos de guardias</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">Potencial</a>
                </button>
            </li>
        </ul>
      </AccordionItem>
      <AccordionItem 
        key="2" 
        className='sideMenu_accordionItem' 
        aria-label="Control" 
        title={
            <div className='sideMenu_customHeader'> 
                <CiViewList className='sideMenu_icon' />
                <span>Control</span>
            </div>
        }
      >
        <ul className="sideMenu_list">
            <li className="sideMenu_listItem sideMenu_listItem-active">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion1</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion2</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion3</a>
                </button>
            </li>
        </ul>
      </AccordionItem>
      <AccordionItem 
        key="3" 
        className='sideMenu_accordionItem' 
        aria-label="Reportes" 
        title={
            <div className='sideMenu_customHeader'> 
                <CiMemoPad className='sideMenu_icon' />
                <span>Reportes</span>
            </div>
        }
      >
        <ul className="sideMenu_list">
            <li className="sideMenu_listItem sideMenu_listItem-active">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion1</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion2</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion3</a>
                </button>
            </li>
        </ul>
      </AccordionItem>
      <AccordionItem 
        key="4" 
        className='sideMenu_accordionItem' 
        aria-label="Lectura de solapin" 
        title={
            <div className='sideMenu_customHeader'>
                <CiBarcode className='sideMenu_icon' /> 
                <span>Lectura de solapin</span>
            </div>
        }
      >
        <ul className="sideMenu_list">
            <li className="sideMenu_listItem sideMenu_listItem-active">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion1</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion2</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion3</a>
                </button>
            </li>
        </ul>
      </AccordionItem>
      <AccordionItem 
        key="5" 
        className='sideMenu_accordionItem' 
        aria-label="Configuración" 
        title={
            <div className='sideMenu_customHeader'> 
                <CiSettings className='sideMenu_icon' />
                <span>Configuración</span>
            </div>
        }
      >
        <ul className="sideMenu_list">
            <li className="sideMenu_listItem sideMenu_listItem-active">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion1</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion2</a>
                </button>
            </li>
            <li className="sideMenu_listItem">
                <button className='sideMenu_buttonLink'>
                    <a className="sideMenu_link" href="#">SubOpcion3</a>
                </button>
            </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}

export default SideMenu;
