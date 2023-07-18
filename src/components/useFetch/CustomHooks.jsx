import useFetch from "./useFetch"

const CustomHooks = () => {
    const { data, loading } = useFetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=1',
        {}
      )
    
      if (loading) {
        return <h3>Loading...</h3>
      }
    
      return (
        <div>
          {data.map((post) => (
            <table
            className="table_content"
            id="table-to-xls">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
              
              </tr>
            </thead>
            <tbody className="tbody">
              {data
             
                .map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    
                  </tr>
                ))}
            </tbody>
          </table>
          ))}
        </div>
      )
    
}

export default CustomHooks