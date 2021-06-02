import { connect } from 'react-redux';
import '../scss/homepages/Chart copy.scss';
import Header from '../../components/dashboard/header';
import Bookingdetails from '../../components/dashboard/Bookingdetails';
    
class Chart extends Component {
    constructor(props){
        super(props);
        this.state={
            BookingdetailsId:sessionStorage.getItem('BookingdetailsId'),
        };
    }
    componentWillMount = () => {
            
    }
    login = () => {
        this.props.history.replace('/login');
    }
    render() {
        return (
            <div className='Chart'>
                座位表
                <div class="container">
                    <div class="screen"></div>
                    <div class="row">
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                </div>
            </div>
        );
    }
}
    
const mapStateToProps = (state) => {
    return{
        
    }
};

export default connect(
    mapStateToProps,
    // homeActionCreators,
)(Chart);