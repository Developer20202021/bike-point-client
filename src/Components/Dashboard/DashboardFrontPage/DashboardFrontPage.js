import React, { useEffect, useState } from 'react';
import './DashboardFrontPage.css';
import Grid from '@mui/material/Grid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Chart from 'chart.js/auto';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const DashboardFrontPage = () => {

    const [users, setUsers] = useState(0);
    const [products,setProducts] = useState(0);
    const [sales, setsales] = useState(0);
    const [productPrice , setProductPrice] = useState(0);
    const [chartData, setChartData] = useState([])




    useEffect(()=>{


        fetch('https://immense-fjord-66300.herokuapp.com/admin/products')
        .then(res=>res.json())
        .then(data=>{
            data?.data?.map(product=>{
                 setProductPrice((product?.productPrice + productPrice)/1000000)
                
            })

            
            setProducts(data?.data.length);

        })
        .catch(err=>{
            console.log(err);
        })


        fetch('https://immense-fjord-66300.herokuapp.com/admin/all-orders')
        .then(res=>res.json())
        .then(data=>{
            data?.map(product=> setsales(product?.productPrice + productPrice))
           


          
        })
        .catch(err=>{
            console.log(err);
        })

        fetch('https://immense-fjord-66300.herokuapp.com/admin/all-users')
        .then(res=>res.json())
        .then(data=>{
            console.log(data?.count);
          
            setUsers(data?.count)



          
        })
        .catch(err=>{
            console.log(err);
        })

        fetch('https://immense-fjord-66300.herokuapp.com/admin/month/all-orders/?allMonth=Jan-Feb-Mar-Apr-May-June-July-Aug-Sept-Oct-Nov-Dec')
        .then(res=>res.json())
        .then(data=>{
            setChartData(data.orderHistory)
            console.log(data.orderHistory);



          
        })
        .catch(err=>{
            console.log(err);
        })
     








    },[])




    const  chartRef = React.createRef(' ');
   useEffect(()=>{

    const ctx = chartRef.current.getContext("2d");
    // 86,314,106,106,107,111,233
    // "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
   
   const getChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{ 
                data: chartData,
                label: "Sales",
                borderColor: "#6673FC",
                backgroundColor: "white",
                fill: false,
            }
            ]
        },
    });
    return () => {
        getChart.destroy()
      }
   

   },[chartData])


    const  pieChartRef = React.createRef(' ');
   useEffect(()=>{

    const ctx =  pieChartRef.current.getContext("2d");
    // 86,314,106,106,107,111,233
    // "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
   
   const getChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{ 
                data: chartData,
                label: "Earnings",
                backgroundColor: [
                  
                    'rgba(88, 103, 221, 0.1)'
                  ],
                  borderColor: [
                    'rgba(88, 103, 221, 0.8)'
                  ],
                  borderWidth: 3,
              
                
            }
            ]
        },
    });
    return () => {
        getChart.destroy()
      }
   

   },[chartData])













    return (
        <div>
           <div className="dashboard-page-box">

           <Grid container spacing={5}>
                <Grid item md={6} lg={3} xs={12}>
                    <div className="item-1">
                        <div className="icon-d">
                            <ShowChartIcon/>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Total Users</p>

                            <p className='d-number'>{users}</p>
                        </div>



                    </div>
                 
  
                </Grid>
                <Grid item md={6} lg={3} xs={12}>
                <div className="item-2">
                        <div className="icon-d">
                            <ProductionQuantityLimitsIcon/>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Total Products</p>

                            <p className='d-number'>{products}</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item md={6} lg={3} xs={12}>
                <div className="item-3">
                        <div className="icon-d">
                          <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Total sales</p>

                            <p className='d-number'>{sales}</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={3}xs={12}>
                <div className="item-4">
                        <div className="icon-d">
                        <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Total Product price </p>

                            <p className='d-number'>{productPrice.toFixed(2)}M</p>
                        </div>



                    </div>
  
                </Grid>




                <Grid item md={6} lg={6} xs ={12}>
                <h2 className="analysis">Earning Analysis</h2>
                    <div className="sales-chart">
                <div>
                    <canvas 
                    
                         id="myChart"
                         ref={pieChartRef}
                    />
                </div>
                    </div>
                   
                   
                 </Grid>


                <Grid item md={6} lg={6} xs ={12}>
                    <h2 className="analysis">Sales Analysis</h2>

                    <div className="sales-chart">
                <div>
                    <canvas 
                    
                         id="Chart"
                         ref={chartRef}
                    />
                </div>
                    </div>
                   
                   
                 </Grid>







                <Grid item md={6} lg={4} xs={12}>
                <div className="item-2-google">
                        <div className="icon-d">
                            <GoogleIcon/>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Our Google+ Account</p>

                            <p className='d-number'>Google+</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item md={6} lg={4} xs={12}>
                <div className="item-3-facebook">
                        <div className="icon-d">
                          <p className='dolar-icon-d'><FacebookIcon/></p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Our facebook Account</p>

                            <p className='d-number'>Facebook</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={4}xs={12}>
                <div className="item-4-twitter">
                        <div className="icon-d">
                        <p className='dolar-icon-d'><TwitterIcon/></p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Our Twitter Account</p>

                            <p className='d-number'>Twitter</p>
                        </div>



                    </div>
  
                </Grid>





            </Grid>

           </div>
            
        </div>
    );
};

export default DashboardFrontPage;