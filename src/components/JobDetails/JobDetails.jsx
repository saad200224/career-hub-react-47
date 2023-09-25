import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams(); 
    const IdInt = parseInt(id)
    const job = jobs.find(job => job.id === IdInt);
    // console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(IdInt);
        toast("You have Applied Successfully.");
    }


    return (
        <div>
            
            <div className="grid md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming Soon</h2>
                    <h2>Job details of : {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;