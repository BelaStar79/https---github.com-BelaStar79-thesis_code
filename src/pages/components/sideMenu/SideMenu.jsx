import { Accordion, AccordionItem } from "@nextui-org/react";
import "./sideMenu.css";
import {
  BsCalendar2Check,
  BsClipboard2Data,
  BsFileEarmarkText,
  BsUpcScan,
  BsGear,
  BsShieldCheck,
} from "react-icons/bs";
import LiComponent from "./liComponent.jsx";

export function SideMenu({ activeSection, activeOption }) {
  const options = {
    planning: {
      key: "1",
      icon: <BsCalendar2Check className="sideMenu_icon" />,
      title: "Planificación",
      titleCursor: "Ver opciones de Planificación",
      suboptions: [
        {
          name: "Planificación",
          titleCursor: "Ir a Planificación",
          link: "/planning",
        },
        {
          name: "Zonas de guardia",
          titleCursor: "Ir a Zonas de guardia",
          link: "/guard-area",
        },
        { name: "Postas", titleCursor: "Ir a Postas", link: "/posts" },
        {
          name: "Grupos de guardia",
          titleCursor: "Ir a Grupos de guardia",
          link: "/guard-groups",
        },
        {
          name: "Potencial",
          titleCursor: "Ir a Potencial",
          link: "/potential",
        },
      ],
    },
    control: {
      key: "2",
      icon: <BsClipboard2Data className="sideMenu_icon" />,
      title: "Control",
      titleCursor: "Ver opciones de Control",
      suboptions: [
        {
          name: "Asistencia",
          titleCursor: "Ir a Asistencia",
          link: "/assistance",
        },
        {
          name: "Incidencia",
          titleCursor: "Ir a Incidencia",
          link: "/incident",
        },
        {
          name: "Oficial de guardia superior",
          titleCursor: "Ir a Oficial de guardia superior",
          link: "/duty-officer",
        },
      ],
    },
    report: {
      key: "3",
      icon: <BsFileEarmarkText className="sideMenu_icon" />,
      title: "Reportes",
      titleCursor: "Ver opciones de Reportes",
      suboptions: [
        { name: "Guardia", titleCursor: "Ir a Guardia", link: "" },
        {
          name: "Incidencia",
          titleCursor: "Ir a Incidencia",
          link: "/incident",
        },
        {
          name: "Potencial",
          titleCursor: "Ir a Potencial",
          link: "/potential",
        },
        {
          name: "Potencial cuantitativo",
          titleCursor: "Ir a Potencial cuantitativo",
          link: "",
        },
        { name: "Periodicidad", titleCursor: "Ir a Periodicidad", link: "" },
        {
          name: "Asistencia",
          titleCursor: "Ir a Asistencia",
          link: "/assistance",
        },
      ],
    },
    scanner: {
      key: "4",
      icon: <BsUpcScan className="sideMenu_icon" />,
      title: "Lectura de solapin",
      titleCursor: "Ver opciones de Lectura de solapin",
      suboptions: [{ name: "Lorem", titleCursor: "", link: "" }],
    },
    configuration: {
      key: "5",
      icon: <BsGear className="sideMenu_icon" />,
      title: "Configuración",
      titleCursor: "Ver opciones de Configuración",
      suboptions: [
        {
          name: "Tipos de incidencia",
          titleCursor: "Ir a Tipos de incidencia",
          link: "",
        },
        {
          name: "Configuraciones de variables",
          titleCursor: "Ir a Configuraciones de variables",
          link: "",
        },
        { name: "Variables", titleCursor: "Ir a Variables", link: "" },
        { name: "Horarios", titleCursor: "Ir a Horarios", link: "" },
        { name: "Turnos", titleCursor: "Ir a Turnos", link: "" },
        { name: "Patrones", titleCursor: "Ir a Patrones", link: "" },
      ],
    },
    security: {
      key: "6",
      icon: <BsShieldCheck className="sideMenu_icon" />,
      title: "Seguridad",
      titleCursor: "Ver opciones de Seguridad",
      suboptions: [
        { name: "Sistemas", titleCursor: "Ir a Sistemas", link: "" },
        { name: "Módulos", titleCursor: "Ir a Módulos", link: "" },
        {
          name: "Agrupación funcional",
          titleCursor: "Ir a Agrupación funcional",
          link: "",
        },
        {
          name: "Funcionalidades",
          titleCursor: "Ir a Funcionalidades",
          link: "",
        },
        { name: "Roles", titleCursor: "Ir a Roles", link: "" },
        {
          name: "Grupos de roles",
          titleCursor: "Ir a Grupos de roles",
          link: "",
        },
        { name: "Usuarios", titleCursor: "Ir a Usuarios", link: "" },
      ],
    },
  };

  // Verificación de errores
  if (!options[activeSection]) {
    console.error(`Invalid active section: ${activeSection}`);
    return null;
  }

  const renderAccordionItem = (sectionKey) => (
    <AccordionItem
      key={options[sectionKey].key}
      className={`sideMenu_accordionItem ${
        activeSection === options[sectionKey].key
          ? "sideMenu_accordionItem-active"
          : ""
      }`}
      aria-label={options[sectionKey].title}
      title={
        <div className="sideMenu_customHeader">
          {options[sectionKey].icon}
          <span>{options[sectionKey].title}</span>
        </div>
      }
    >
      <ul className="sideMenu_list">
        {options[sectionKey].suboptions.map((option) => (
          <LiComponent
            key={option.name}
            name={option.name}
            class_name={`${
              activeOption === option.name ? "sideMenu_listItem-active" : ""
            }`}
            link={option.link}
          />
        ))}
      </ul>
    </AccordionItem>
  );

  return (
    <Accordion className="sideMenu">
      {Object.keys(options).map(renderAccordionItem)}
    </Accordion>
  );
}

export default SideMenu;
