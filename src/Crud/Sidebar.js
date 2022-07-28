import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import SimpleBar from "simplebar-react";
import Logo from "../images/security.png"
import image from "../images/SECURITY MANAGEMENT.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarHeader">
        <Link to="/">
          <img src={Logo} alt="" />
          <img src={image} alt=""></img>
        </Link>
      </div>
      <SimpleBar className="menuHolder">
        <ul className="sidebarMenu">
          <li>
            <NavLink
              to="/"
              className={(isActive) =>
                "menuLink" + (!isActive ? " unselected" : "")
              }
            >
              <i>
                <Icon icon="ic:outline-dashboard" />
              </i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="menuLink"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#c1"
              aria-expanded="false"
            >
              <i>
                <Icon icon="ic:outline-preview" />
              </i>
              <span> T&A</span>
              <i className="me-0">
                <Icon icon="bx:bx-chevron-down" />
              </i>
            </NavLink>
            <div className="collapse" id="c1">
              <ul className="subMenu">
                <li>
                  <Link to="/create-schedule" className="sublink">

                    <span> Create Shift</span>
                  </Link>
                </li>
                <li>
                  <Link to="/checkin" className="sublink">

                    <span> Check-In Manual</span>
                  </Link>
                </li>
                <li>
                  <Link to="/audit" className="sublink">

                    <span>Audit</span>
                  </Link>
                </li>

                <li>
                  <Link to="/task-completed" className="sublink">

                    <span>Task Completed</span>
                  </Link>
                </li>
                <li>
                  <Link to="/late-reports" className="sublink">

                    <span> Late Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="#"
              className="menuLink"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#c2"
              aria-expanded="false"
            >
              <i>
                <Icon icon="carbon:report-data" />
              </i>
              <span> Reports</span>
              <i className="me-0">
                <Icon icon="bx:bx-chevron-down" />
              </i>
            </NavLink>
            <div className="collapse" id="c2">
              <ul className="subMenu">
                <li>
                  <Link to="/regular-reports" className="sublink">

                    <span> Regular Report</span>
                  </Link>
                </li>

                <li>
                  <Link to="/incident-reports" className="sublink">

                    <span> Incident Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/area-reports" className="sublink">

                    <span> Report By area</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="#"
              className="menuLink"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#c3"
              aria-expanded="false"
            >
              <i>
                <Icon icon="bi:clock-history" />
              </i>
              <span>Timesheet</span>
              <i className="me-0">
                <Icon icon="bx:bx-chevron-down" />
              </i>
            </NavLink>
            <div className="collapse" id="c3">
              <ul className="subMenu">
                <li>
                  <Link to="/timesheet" className="sublink">

                    <span> Check-In / CheckOut </span>
                  </Link>
                </li>

                <li>
                  <Link to="/shift-report" className="sublink">

                    <span> Shift Reports</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="#"
              className="menuLink"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#c4"
              aria-expanded="false"
            >
              <i>
                <Icon icon="ph:users-three" />
              </i>
              <span>Employee Management</span>
              <i className="me-0">
                <Icon icon="bx:bx-chevron-down" />
              </i>
            </NavLink>
            <div className="collapse" id="c4">
              <ul className="subMenu">
                <li>
                  <Link to="/users" className="sublink">

                    <span> Add Employee</span>
                  </Link>
                </li>
                <li>
                  <Link to="/employee-list" className="sublink">

                    <span> Employees List</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="#"
              className="menuLink"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#c6"
              aria-expanded="false"
            >
              <i>
                <Icon icon="ph:users-three" />
              </i>
              <span>Client Management</span>
              <i className="me-0">
                <Icon icon="bx:bx-chevron-down" />
              </i>
            </NavLink>
            <div className="collapse" id="c6">
              <ul className="subMenu">
                <li>
                  <Link to="/client-management" className="sublink">

                    <span>Clients</span>
                  </Link>
                </li>
                <li>
                  <Link to="/invoices" className="sublink">

                    <span> Client Invoices</span>
                  </Link>
                </li>
                <li>
                  <NavLink to="/client-reports" className="sublink">

                    <span>Client Reports</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/site-management" className="sublink">

                    <span>Site Management</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/sub-contractor" className="menuLink">
              <i>
                <Icon icon="carbon:id-management" />
              </i>
              <span>Contractor Management</span>
            </Link>
          </li>

          <li>
            <Link to="/payroll" className="menuLink">
              <i>
                <Icon icon="carbon:id-management" />
              </i>
              <span> Payroll Management</span>
            </Link>
          </li>

          <li>
            <NavLink to="/Chat" className="menuLink">
              <i>
                <Icon icon="bi:chat-dots" />
              </i>
              <span>Broadcast</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/alerts" className="menuLink">
              <i>
                <Icon icon="akar-icons:circle-alert" />
              </i>
              <span>Alerts</span>
            </NavLink>
          </li>
        </ul>
      </SimpleBar>
    </div>
  );
}

export default Sidebar;
