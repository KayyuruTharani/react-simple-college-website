import "./department.css";
export default function Department() {
    return (
        <>
            <div className="department">
            <h1>Department</h1>
            <div>
            <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AIDS</td>
            <td>120</td>
          </tr>
          <tr>
            <td>AIML</td>
            <td>140</td>
          </tr>
          <tr>
            <td>MECH</td>
            <td>180</td>
          </tr>
          <tr>
            <td>Bio-Medical</td>
            <td>110</td>
          </tr>
          <tr>
            <td>EEE</td>
            <td>250</td>
          </tr>
          <tr>
            <td>CSE</td>
            <td>150</td>
          </tr>
          <tr>
            <td>AGRI</td>
            <td>123</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </div>
        </>
    )
}





    
      