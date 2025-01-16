import { useState, useTransition } from "react";
import { useEffect } from "react";
import Loader from "../components/UI/Loader";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/Layout/CountryCard";

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        });
    }, []);

    if (isPending) return <Loader />;
    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {countries.map((curCountry,index) => {
                    return <CountryCard country={curCountry} key={index}/>;
                })}
            </ul>
        </section>
    );
};

export default Country;
