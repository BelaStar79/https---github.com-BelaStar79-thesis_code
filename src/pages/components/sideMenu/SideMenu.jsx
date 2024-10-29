import { Accordion, AccordionItem, link } from "@nextui-org/react";
import "./sideMenu.css";
import {
  BsCalendar2Check,
  BsClipboard2Check,
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
      suboptions: [
        { name: "Planificación", link: "" },
        { name: "Zonas de Guardia", link: "" },
        { name: "Postas", link: "" },
        { name: "Grupos de guardia", link: "" },
        { name: "Potencial", link: "" },
      ],
    },
    control: {
      key: "2",
      icon: <BsClipboard2Check className="sideMenu_icon" />,
      title: "Control",
      suboptions: [
        { name: "Asistencia", link: "" },
        { name: "Incidencia", link: "" },
        { name: "Oficial de guardia superior", link: "" },
      ],
    },
    report: {
      key: "3",
      icon: <BsFileEarmarkText className="sideMenu_icon" />,
      title: "Reportes",
      suboptions: [
        { name: "Guardia", link: "" },
        { name: "Incidencia", link: "" },
        { name: "Potencial", link: "" },
        { name: "Potencial cuantitativo", link: "" },
        { name: "Periodicidad", link: "" },
        { name: "Asistencia", link: "" },
      ],
    },
    scanner: {
      key: "4",
      icon: <BsUpcScan className="sideMenu_icon" />,
      title: "Lectura de solapin",
      suboptions: [{ name: "Lorem", link: "" }],
    },
    configuration: {
      key: "5",
      icon: <BsGear className="sideMenu_icon" />,
      title: "Configuración",
      suboptions: [
        { name: "Tipos de incidencia", link: "" },
        { name: "Configuraciones de variables", link: "" },
        { name: "Variables", link: "" },
        { name: "Horarios", link: "" },
        { name: "Turnos", link: "" },
        { name: "Patrones", link: "" },
      ],
    },
    security: {
      key: "6",
      icon: <BsShieldCheck className="sideMenu_icon" />,
      title: "Seguridad",
      suboptions: [
        { name: "Sistemas", link: "" },
        { name: "Módulos", link: "" },
        { name: "Agrupación funcional", link: "" },
        { name: "Funcionalidades", link: "" },
        { name: "Roles", link: "" },
        { name: "Grupos de roles", link: "" },
        { name: "Usuarios", link: "" },
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
            link={options.planning.suboptions[0].link}
            class_name="sideMenu_listItem-active"
          />
          <LiComponent
            name={options.planning.suboptions[1].name}
            link={options.planning.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.planning.suboptions[2].name}
            link={options.planning.suboptions[2].link}
            class_name=""
          />
          <LiComponent
            name={options.planning.suboptions[3].name}
            link={options.planning.suboptions[3].link}
            class_name=""
          />
          <LiComponent
            name={options.planning.suboptions[4].name}
            link={options.planning.suboptions[4].link}
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
            link={options.control.suboptions[0].link}
            class_name="sideMenu_listItem-active"
          />
          <LiComponent
            name={options.control.suboptions[1].name}
            link={options.control.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.control.suboptions[2].name}
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
            link={options.report.suboptions[0].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[1].name}
            link={options.report.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[2].name}
            link={options.report.suboptions[2].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[3].name}
            link={options.report.suboptions[3].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[4].name}
            link={options.report.suboptions[4].link}
            class_name=""
          />
          <LiComponent
            name={options.report.suboptions[5].name}
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
            link={options.configuration.suboptions[0].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[1].name}
            link={options.configuration.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[2].name}
            link={options.configuration.suboptions[2].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[3].name}
            link={options.configuration.suboptions[3].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[4].name}
            link={options.configuration.suboptions[4].link}
            class_name=""
          />
          <LiComponent
            name={options.configuration.suboptions[5].name}
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
            link={options.security.suboptions[0].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[1].name}
            link={options.security.suboptions[1].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[2].name}
            link={options.security.suboptions[2].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[3].name}
            link={options.security.suboptions[3].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[4].name}
            link={options.security.suboptions[4].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[5].name}
            link={options.security.suboptions[5].link}
            class_name=""
          />
          <LiComponent
            name={options.security.suboptions[6].name}
            link={options.security.suboptions[6].link}
            class_name=""
          />
        </ul>
      </AccordionItem>
    </Accordion>
  );
}

export default SideMenu;
