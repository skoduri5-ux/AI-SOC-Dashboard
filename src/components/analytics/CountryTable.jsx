import { countries } from "../../data/analytics";

function CountryTable() {
  return (
    <div>

      <h2 className="text-xl font-bold mb-5">
        Top Targeted Countries
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-700">

            <th className="text-left py-3">
              Country
            </th>

            <th className="text-left">
              Attacks
            </th>

          </tr>

        </thead>

        <tbody>

          {countries.map((country) => (

            <tr
              key={country.country}
              className="border-b border-slate-800"
            >

              <td className="py-4">
                {country.country}
              </td>

              <td>
                {country.attacks}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CountryTable;
