import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { themeProps } from "../types/Types";
import DoughnutChart from "../components/Charts/DoughnutChart";
import Card from "../components/Card/Card";

function ClientList({ theme }: themeProps) {
    return (
        <div className="flex justify-center flex-col  gap-4 bg-base-200" data-theme={theme}>
            <div className="h-2/6 bg-white p-8">
                <Breadcrumbs />
                <h2 className="ext-lg md:text-2xl font-bold">Clients</h2>
            </div>
            <div className="flex gap-4 px-4">
                <div className="w-3/4 bg-white p-8 rounded-lg">
                    <h3 className="font-bold mb-3 md:text-lg">Client Summary</h3>
                    <div className="flex justify-around items-center">
                        <DoughnutChart customClass="w-30" />
                        <div>
                            <div>
                                <h3 className="font-bold md:text-2xl">200</h3 >
                                <h4 className="md:text-lg">Active Clients</h4>
                            </div>
                            <div>
                                <h3 className="font-bold md:text-2xl">36</h3>
                                <h4 className="md:text-lg">Inactive Clients</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 bg-white p-8 rounded-lg">
                    <h3 className="font-bold mb-3 md:text-lg">New Clients</h3>
                </div>
            </div>

            <div className=" px-4 pb-4">
                <div className="p-8  bg-white rounded-lg">
                    <h3 className="font-bold mb-3 md:text-lg">Client List</h3>
                    <Card>
                            <div className="w-full">
                                <h2 className="card-title text-2xl h-1/4">Address details</h2>
                                <div className="flex flex-wrap pt-4 pl-4 gap-y-4">
                                    <div className="w-1/2 ">
                                        <h4>Address</h4>
                                        <h4 className="font-bold text-lg">Kakkodi ,Kozhikode</h4>
                                    </div>
                                    <div className="w-1/2">
                                        <h4>City / District</h4>
                                        <h4 className="font-bold text-lg">Kozhikode</h4>
                                    </div>
                                    <div className="w-1/2">
                                        <h4>State</h4>
                                        <h4 className="font-bold text-lg">Kerala</h4>
                                    </div>
                                    <div className="w-1/2">
                                        <h4>Latitude & Longitude</h4>
                                        <h4 className="font-bold text-lg">48.8566, 48.8566</h4>
                                    </div>

                                </div>
                            </div>
                        </Card>
                </div>
            </div>
        </div>
    )
}

export default ClientList