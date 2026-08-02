import { Helmet } from 'react-helmet-async'
import DoctorManagementTable from '../../components/admin/DoctorManagementTable.jsx'

function AdminDoctors() {
  return (
    <>
      <Helmet>
        <title>Manage Doctors | Admin</title>
      </Helmet>

      <div className="p-6">
        <DoctorManagementTable description="Manage all doctors from one place." title="All Doctors" />
      </div>
    </>
  )
}

export default AdminDoctors
