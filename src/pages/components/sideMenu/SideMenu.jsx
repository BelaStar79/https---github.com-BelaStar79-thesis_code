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
          link: "/planning/planning",
        },
        {
          name: "Zonas de guardia",
          titleCursor: "Ir a Zonas de guardia",
          link: "/planning/guard-area",
        },
        { name: "Postas", titleCursor: "Ir a Postas", link: "/planning/posts" },
        {
          name: "Grupos de guardia",
          titleCursor: "Ir a Grupos de guardia",
          link: "/planning/guard-groups",
        },
        {
          name: "Potencial",
          titleCursor: "Ir a Potencial",
          link: "/planning/potential",
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
          link: "/control/assistance",
        },
        {
          name: "Incidencia",
          titleCursor: "Ir a Incidencia",
          link: "/control/incident",
        },
        {
          name: "Oficial de guardia superior",
          titleCursor: "Ir a Oficial de guardia superior",
          link: "/control/duty-officer",
        },
      ],
    },
    report: {
      key: "3",
      icon: <BsFileEarmarkText className="sideMenu_icon" />,
      title: "Reportes",
      titleCursor: "Ver opciones de Reportes",
      suboptions: [
        { name: "Guardia", titleCursor: "Ir a Guardia", link: "/report/guard" },
        {
          name: "Incidencia",
          titleCursor: "Ir a Incidencia",
          link: "/report/incident",
        },
        {
          name: "Potencial",
          titleCursor: "Ir a Potencial",
          link: "/report/potential",
        },
        {
          name: "Potencial cuantitativo",
          titleCursor: "Ir a Potencial cuantitativo",
          link: "/report/quantitative-potential",
        },
        {
          name: "Periodicidad",
          titleCursor: "Ir a Periodicidad",
          link: "/report/frequency",
        },
        {
          name: "Asistencia",
          titleCursor: "Ir a Asistencia",
          link: "/report/assistance",
        },
      ],
    },
    // scanner: {
    //   key: "4",
    //   icon: <BsUpcScan className="sideMenu_icon" />,
    //   title: "Lectura de solapin",
    //   titleCursor: "Ver opciones de Lectura de solapin",
    //   suboptions: [
    //     {
    //       name: "Lectura de solapin",
    //       titleCursor: "Ir a Lectura de solapin",
    //       link: "/scanner",
    //     },
    //   ],
    // },
    configuration: {
      key: "5",
      icon: <BsGear className="sideMenu_icon" />,
      title: "Configuración",
      titleCursor: "Ver opciones de Configuración",
      suboptions: [
        {
          name: "Tipos de incidencia",
          titleCursor: "Ir a Tipos de incidencia",
          link: "/configuration/type-incidents",
        },
        {
          name: "Configuraciones de variables",
          titleCursor: "Ir a Configuraciones de variables",
          link: "/configuration/configuration-variables",
        },
        {
          name: "Horarios",
          titleCursor: "Ir a Horarios",
          link: "/configuration/schedules",
        },
        // { name: "Turnos", titleCursor: "Ir a Turnos", link: "" },
        // { name: "Patrones", titleCursor: "Ir a Patrones", link: "" },
      ],
    },
    security: {
      key: "6",
      icon: <BsShieldCheck className="sideMenu_icon" />,
      title: "Seguridad",
      titleCursor: "Ver opciones de Seguridad",
      suboptions: [
        // { name: "Sistemas", titleCursor: "Ir a Sistemas", link: "" },
        // { name: "Módulos", titleCursor: "Ir a Módulos", link: "" },
        // {
        //   name: "Agrupación funcional",
        //   titleCursor: "Ir a Agrupación funcional",
        //   link: "",
        // },
        // {
        //   name: "Funcionalidades",
        //   titleCursor: "Ir a Funcionalidades",
        //   link: "",
        // },
        // { name: "Roles", titleCursor: "Ir a Roles", link: "" },
        // {
        //   name: "Grupos de roles",
        //   titleCursor: "Ir a Grupos de roles",
        //   link: "",
        // },
        {
          name: "Usuarios",
          titleCursor: "Ir a Usuarios",
          link: "/configuration/users",
        },
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
