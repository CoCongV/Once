export interface State {
    username: string;
    avatar: string;
    isLogin: boolean;
}

const initState: State = {
    username: '',
    avatar: '',
    isLogin: false,
};

export default {
    state: initState,
};
