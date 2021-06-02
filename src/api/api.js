let baseURL = 'http://localhost:3000';

export default{
    LOGING: baseURL+'/login',
    Registered: baseURL+'/users/saveOrUpdate',
    FINDAll: baseURL+'/findAll',
    FINDBYID: baseURL+'/findById',
    Upload: baseURL+'/upload',
    SeatUpdate:baseURL+'/users/seatUpdate',
    FINDAllByUserName:baseURL+'/users/info',
    SaveOrUpdate:baseURL+'/users/saveOrUpdate',
    FindOderById:baseURL+'/users/findOderById',
    DeleteById:baseURL+'/users/deleteById',
    FingMusicUserById:baseURL+'/users/fingMusicUserById',
    UpdateMusic:baseURL+'/users/UpdateMusic',
}