import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    INTERFACE_ROUTE, CHARACTER_ROUTE, EASY_TASK, NORMAL_TASK, HARD_TASK, EVERYDAY_TASK
} from './utils/consts'
import AuthForm from './Components/Auth/AuthForm'
import ClientPart from './Components/ClientPart/ClientPart'
import InterfaceDefTask from "./Components/InterfaceDefTask/InterfaceDefTask";
import CreateCharacter from "./Components/CreateCharacter/CreateCharacter";
import InterfaceEasyTask from "./Components/InterfaceEasyTask/InterfaceEasyTask";
import InterfaceHardTask from "./Components/InterfaceHardTask/InterfaceHardTask";
import InterfaceNormalTask from "./Components/InterfaceNormalTask/InterfaceNormalTask";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthForm
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthForm
    }
]
export const authRoutes = [
    {
        path: INTERFACE_ROUTE,
        Component: ClientPart
    },
    {
        path: EVERYDAY_TASK,
        Component: InterfaceDefTask
    },
    {
        path: EASY_TASK,
        Component: InterfaceEasyTask
    },
    {
        path: NORMAL_TASK,
        Component: InterfaceNormalTask
    },
    {
        path: HARD_TASK,
        Component: InterfaceHardTask
    },
    {
        path: CHARACTER_ROUTE,
        Component: CreateCharacter
    }
]