import { useDispatch } from "react-redux";
import { NotesLayout } from "../layout/NotesLayout";

export const NotesPage = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        console.log('logout');
    }

  return (
    <NotesLayout>
        <h1>sss</h1>
    </NotesLayout>
  )
}
