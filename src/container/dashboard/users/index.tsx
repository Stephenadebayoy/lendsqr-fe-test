/** @format */

import UsersComponent from "../../../components/ui/dashboard/users";
import useUsers from "../../../hooks/useUsers";

function UsersContainer() {
  //api logic will be handled here and passed as props
  const { users } = useUsers();

  return <UsersComponent users={users} />;
}

export default UsersContainer;
