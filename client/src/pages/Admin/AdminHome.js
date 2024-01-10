import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-2">
          <div className="container my-4">
            <div className="alert alert-success">
              <h4 className="alert-heading">
                Welcome to, VitalFlow Blood Bank {user?.name}!
              </h4>
              <p>
                As the administrator of the VitalFlow Blood Bank, you play a
                crucial role in managing our blood bank's operations and
                ensuring a steady supply of life-saving blood.
              </p>
            </div>

            <div className="alert alert-info my-1">
              <h5>Your Responsibilities:</h5>
              <ul>
                <li>Manage blood inventory and records.</li>
                <li>Coordinate donor and recipient information.</li>
                <li>Ensure the efficient operation of the blood bank.</li>
              </ul>
            </div>

            <div className="alert alert-warning my-1">
              <h5>Important Notices:</h5>
              <ul>
                <li>Stay updated with the latest blood inventory levels.</li>
                <li>Check for upcoming blood donation events.</li>
                <li>Review policy updates to ensure compliance.</li>
              </ul>
            </div>
            <div className="alert alert-danger my-1">
              <h5>Data Security Reminder:</h5>
              <p>
                Protecting the confidentiality of donor and recipient
                information is vital. Please ensure the highest standards of
                data security.
              </p>
            </div>
            <div className="alert alert-info my-1">
              <h5>Need Assistance?</h5>
              <p>
                If you have any questions or need assistance, feel free to reach
                out to our support team at{" "}
                <a href="jaydevzala27@gmail.com">jaydevzala27@gmail.com</a> or
                call us at <a href="tel:+91-8401956804">+91-8401956804</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
