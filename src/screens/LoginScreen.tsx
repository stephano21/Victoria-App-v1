import { NavigationProps} from './../../types';
//Components
import LoginForm from './../components/auth/LoginForm'



const LoginScreen = ({ navigation }: NavigationProps) => {

    return(
        <LoginForm navigation={navigation}/>
    )
    
}
export default LoginScreen


