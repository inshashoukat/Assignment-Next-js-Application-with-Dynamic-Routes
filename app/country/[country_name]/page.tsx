import { CountryDetails } from "@/types/type";
import Link from "next/link";

export default function CountryName({ params }: { params: { country_name: string } }) {
    console.log("Params:", params); // Log params for debugging

    const countryDetails: CountryDetails[] = [
        { name: "Pakistan", population: 252278632, capital: "Islamabad" },
        { name: "Australia", population: 26780050, capital: "Canberra" },
        { name: "Spain", population: 47910526, capital: "Madrid" },
        { name: "China", population: 1419321278, capital: "Beijing" },
        { name: "Japan", population: 123753041, capital: "Tokyo" }
    ];

    // Ensure params.country_name exists before trying to use it
    const countryName = params.country_name?.toLowerCase();
    const country = countryName
        ? countryDetails.find((c) => c.name.toLowerCase() === countryName)
        : undefined;

    if (country) {
        return (
            <div>
                <h1>{country.name}</h1>
                <h2>Capital: {country.capital}</h2>
                <h2>Population: {country.population}</h2>
                <Link href="/country" className="text-center bg-blue-300">Back to Country List</Link>
            </div>
        );
    } else {
        return (
            <div>
                <h1>{params.country_name || "Country"} Not Found</h1>
                <Link href="/country" className="text-center bg-blue-300">Back to Country List</Link>
            </div>
        );
    }
}
