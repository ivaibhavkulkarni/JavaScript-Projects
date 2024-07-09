
function main() {
    const companyId = readLine();
    const employeeId = parseInt(readLine());
  
    const companies = [
      {
        companyCode:"PY234",
        employees: [293, 730, 637]
      },
      {
        companyCode:"GR023",
        employees:[823, 563]
      }, 
      {
        companyCode:"HC754",
        employees: [511, 529, 943]
      }, 
      {
        companyCode:"PA439",
        employees: [276, 188, 333]
      }, 
      {
        companyCode:"CX536",
        employees: [431, 923]
      },
      {
        companyCode:"RD310",
        employees: [356, 901]
      }
    ];
    
    /* Write your code here */
    const searchCompanies = () =>{
        return new Promise((resolve,reject) =>{
            const company = companies.find(c => c.companyCode === companyId);
            if(company){
                const isEmployeeExists = company.employees.includes(employeeId);
                if(isEmployeeExists){
                    resolve("Employee Found");
                }else{
                    reject("Employee Not Found");
                }
            }else{
                reject("Company Not Found");
            }
        });
    };
    
    const myPromise = async () =>{
        try{
            const result = await searchCompanies();
            console.log(result);
        }catch(error){
            console.log(error);
        }
    };
    
    myPromise();
    
  }
main();  