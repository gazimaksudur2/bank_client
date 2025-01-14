import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useAuthDB = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data:userDB, refetch } = useQuery({
        queryKey: ['userDB'],
        queryFn: ()=>{
            const info = axiosPublic.get(`/users?email=${user?.email}`)
                            .then(res=> res.data)
                            .catch(err=> console.log(err?.message));
            return info;
        }
    })
    return { userDB, refetch }
};

export default useAuthDB;