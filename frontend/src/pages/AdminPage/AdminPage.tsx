import useAuth from '../../hooks/useAuth'
import UserForm from '../../components/UserForm'
import EditBlocks from '../../components/EditBlocks';
import '../../styles/adminPage/admin.scss'
function AdminPage() {
  const [isLogin,token] = useAuth();

  return isLogin ? (
    <>
    <span className='span__admin'>ADMIN PANEL</span>
    <div className='div__admin'>
      <UserForm token={token}/>
      <EditBlocks token={token}/>
    </div>
    </>
  ) : (
    <div>
      <p>You dont have permission to this page</p>
    </div>
  )
}

export default AdminPage
