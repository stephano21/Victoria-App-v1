import { NavigationProps} from './../../types';
//Components
import RegisterForm from './../components/auth/RegisterForm'


const LoginScreen = ({ navigation }: NavigationProps) => {
    return (
        <RegisterForm navigation={navigation}/>
    )

}
export default LoginScreen