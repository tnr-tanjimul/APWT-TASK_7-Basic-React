
function Company(_tan) {
    return (
        <tr>
            <th scope="row">{_tan.Id}</th>
            <td>{_tan.Name}</td>
            <td>{_tan.LicenseNo}</td>
            <td>{_tan.Address}</td>
            <td>{_tan.Phone}</td>
            <td>{_tan.Email}</td>
            
            
        </tr>
    );
}

export default Company;