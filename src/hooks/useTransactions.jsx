import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const useTransactions = () => {
    const axiosPublic = useAxiosPublic();
    const { data: transactions, refetch } = useQuery({
        queryKey: ['transactions'],
        queryFn: ()=>{
            const txn = axiosPublic.get('/transactions')
                            .then(res=> res?.data)
                            .catch(err=> console.log(err?.message))
            return txn;
        }
    })
    return { transactions, refetch }
};

export default useTransactions;