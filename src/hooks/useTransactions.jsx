import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';


const useTransactions = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: transactions, refetch } = useQuery({
        queryKey: ['transactions'],
        queryFn: ()=>{
            const txn = axiosPublic.get(`/transactions?email=${user?.email}`)
                            .then(res=> res?.data)
                            .catch(err=> console.log(err?.message))
            return txn;
        }
    })
    return { transactions, refetch }
};

export default useTransactions;