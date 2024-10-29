import { Accordion, AccordionItem, link } from "@nextui-org/react";
import "./sideMenu.css";
import {
  BsCalendar2Check,
  BsClipboard2Data,
  BsFileEarmarkText,
  BsUpcScan,
  BsGear,
  BsShieldCheck,
} from "react-icons/bs";
import LiComponent from "./liComponent";

export function SideMenu() {
  const options = {
    planning: {
      key: "1",
      icon: <BsCalendar2Check className="sideMenu_icon" />,
      title: "Planificación",
      titleCursor: "Ver opciones de Planificación",
      suboptions: [
        { name: "Planificación", titleCursor: "Ir a Planificación", link: "" },
        {
          name: "Zonas de Guardia",
          titleCursor: "Ir a Zonas de Guardia",
          link: "",
        },
        { name: "Postas", titleCursor: "Ir a Postas", link: "" },
        {
          name: "Grupos de guardia",
          titleCursor: "Ir a Grupos de guardia",
          link: "",
        },
        { name: "Potencial", titleCursor: "Ir a Potencial", link: "" },
      ],
    },
    control: {
      key: "2",
      icon: <BsClipboard2Data className="sideMenu_icon" />,
      title: "Control",
      titleCursor: "Ver opciones de Control",
      suboptions: [
        { name: "Asistencia", titleCursor: "Ir a Asistencia", link: "" },
        { name: "Incidencia", titleCursor: "Ir a Incidencia", link: "" },
        {
          name: "Oficial de guardia superior",
          titleCursor: "Ir a Oficial de guardia superior",
          link: "",
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
        { name: "Incidencia", titleCursor: "Ir a Incidencia", link: "" },
        { name: "Potencial", titleCursor: "Ir a Potencial", link: "" },
        {
          name: "Potencial cuantitativo",
          titleCursor: "Ir a Potencial cuantitativo",
          link: "",
        },
        { name: "Periodicidad", titleCursor: "Ir a Periodicidad", link: "" },
        { name: "Asistencia", titleCursor: "Ir a Asistencia", link: "" },
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

  return (
    <Accordion className="sideMenu">
      <AccordionItem
        key={options.planning.key}
        className="sideMenu_accordionItem sideMenu_accordionItem-active"
        aria-label={options.planning.title}
        title={
          <div className="sideMenu_customHeader">
            {options.planning.icon}
            <span>{options.planning.title}</span>
          </div>
        }
      >
        <ul className="sideMenu_list">
          <LiComponent
            name={options.planning.suboptions[0].name}
            titleCursor={options.planning.suboptions[0].titleCursor}
            link={options.planning.suboptions[0].link}
            class_name="sideMenu_listItem-active"
          />
          <LiComponent
            name={options.planning.suboptions[1].name}
            link={options.planning.suboptions[1].link}
            titleCursor={options.planning.suboptions[1].titleCursor}
            class_name=""
          />
          <LiComponent
            name={options.planning.suboptions[2].name}
            link={options.planning.suboptions[2].link}
            titleCursor={options.planning.suboptions[2].titleCursor}
            class_name=""
          />
          <LiComponent
            name={options.planning.suboptions[3].name}
            link={options.planning.suboptions[3].link}
            titleCursor={options.planning.suboptions[3].titleCursor}
            class_name=""
          />
          <LiComponent
            name={options.planning.suboptions[4].name}
            link={options.planning.suboptions[4].link}
            titleCursor={options.planning.suboptions[4].titleCursor}
            class_name=""
          />
        </ul>
      </AccordionItem>
      <AccordionItem
        key={options.control.key}
        className="sideMenu_accordionItem"
        aria-label={options.control.title}
        title={
          <div className="sideMenu_customHeader">
            {options.control.icon}
            <span>{options.control.title}</span>
          </div>
        }
      >
        <ul className="sideMenu_list">
          <LiComponent
            name={options.control.suboptions[0].name}
            titleCursor={options.control.suboptions[0].titleCursor}
            link={options.control.suboptions[0].link}
            class_name=""
          />
          <LiComponent
            name={options.control.suboptions[1].name}
            titleCursor={options.control.suboptions[1].titleCursor}
            link={options.control.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.control.suboptions[2].name}
            titleCursor={options.control.suboptions[2].titleCursor}
            link={options.control.suboptions[2].link}
            class_name=""
          />
        </ul>
      </AccordionItem>
      <AccordionItem
        key={options.report.key}
        className="sideMenu_accordionItem"
        aria-label={options.report.title}
        title={
          <div className="sideMenu_customHeader">
            {options.report.icon}
            <span>{options.report.title}</span>
          </div>
        }
      >
        <ul className="sideMenu_list">
          <LiComponent
            name={options.report.suboptions[0].name}
            titleCursor={options.report.suboptions[0].titleCursor}
            link={options.report.suboptions[0].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[1].name}
            titleCursor={options.report.suboptions[1].titleCursor}
            link={options.report.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[2].name}
            titleCursor={options.report.suboptions[2].titleCursor}
            link={options.report.suboptions[2].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[3].name}
            titleCursor={options.report.suboptions[3].titleCursor}
            link={options.report.suboptions[3].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[4].name}
            titleCursor={options.report.suboptions[4].titleCursor}
            link={options.report.suboptions[4].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[5].name}
            titleCursor={options.report.suboptions[5].titleCursor}
            link={options.report.suboptions[5].link}
            class_name=""
          />
        </ul>
      </AccordionItem>
      <AccordionItem
        key={options.scanner.key}
        className="sideMenu_accordionItem"
        aria-label={options.scanner.title}
        title={
          <div className="sideMenu_customHeader">
            {options.scanner.icon}
            <span>{options.scanner.title}</span>
          </div>
        }
      >
        <ul className="sideMenu_list">
          <LiComponent
            name={options.scanner.suboptions[0].name}
            titleCursor={options.scanner.suboptions[0].titleCursor}
            link={options.scanner.suboptions[0].link}
            class_name=""
          />
        </ul>
      </AccordionItem>
      <AccordionItem
        key={options.configuration.key}
        className="sideMenu_accordionItem"
        aria-label={options.configuration.title}
        title={
          <div className="sideMenu_customHeader">
            {options.configuration.icon}
            <span>{options.configuration.title}</span>
          </div>
        }
      >
        <ul className="sideMenu_list">
          <LiComponent
            name={options.configuration.suboptions[0].name}
            titleCursor={options.configuration.suboptions[0].titleCursor}
            link={options.configuration.suboptions[0].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[1].name}
            titleCursor={options.configuration.suboptions[1].titleCursor}
            link={options.configuration.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[2].name}
            titleCursor={options.configuration.suboptions[2].titleCursor}
            link={options.configuration.suboptions[2].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[3].name}
            titleCursor={options.configuration.suboptions[3].titleCursor}
            link={options.configuration.suboptions[3].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[4].name}
            titleCursor={options.configuration.suboptions[4].titleCursor}
            link={options.configuration.suboptions[4].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[5].name}
            titleCursor={options.configuration.suboptions[5].titleCursor}
            link={options.configuration.suboptions[5].link}
            class_name=""
          />
        </ul>
      </AccordionItem>
      <AccordionItem
        key={options.security.key}
        className="sideMenu_accordionItem"
        aria-label={options.security.title}
        title={
          <div className="sideMenu_customHeader">
            {options.security.icon}
            <span>{options.security.title}</span>
          </div>
        }
      >
        <ul className="sideMenu_list">
          <LiComponent
            name={options.security.suboptions[0].name}
            titleCursor={options.security.suboptions[0].titleCursor}
            link={options.security.suboptions[0].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[1].name}
            titleCursor={options.security.suboptions[1].titleCursor}
            link={options.security.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[2].name}
            titleCursor={options.security.suboptions[2].titleCursor}
            link={options.security.suboptions[2].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[3].name}
            titleCursor={options.security.suboptions[3].titleCursor}
            link={options.security.suboptions[3].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[4].name}
            titleCursor={options.security.suboptions[4].titleCursor}
            link={options.security.suboptions[4].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[5].name}
            titleCursor={options.security.suboptions[5].titleCursor}
            link={options.security.suboptions[5].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[6].name}
            titleCursor={options.security.suboptions[6].titleCursor}
            link={options.security.suboptions[6].link}
            class_name=""
          />
        </ul>
      </AccordionItem>
    </Accordion>
  );
}

export default SideMenu;
