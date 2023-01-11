import ReactTable from "react-table-6";
import React, { useEffect, useState, useRef } from "react";
import "react-table-6/react-table.css";
import withFixedColumns from "react-table-hoc-fixed-columns";
import "react-table-hoc-fixed-columns/lib/styles.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Service from "../Service/http";
import HomeNavbar from "./RNavbar";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Button } from "@mui/material";
import { ExportCSV } from "./ExportCSV";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import DatePicker from 'react-datepicker';
import { Portal } from "react-overlays";
import Modal from 'react-bootstrap/Modal';
import HelpModal from "./HelpModal";
import { Center } from "@mantine/core";


const ReactTableFixedColumns = withFixedColumns(ReactTable);
function Publications2() {
    const service = new Service();
    const navigate = useNavigate();

    let [data, setData] = useState([]); /*Table data*/
    let [pageData, setPageData] = useState([]); /*Meta Data about pages*/
    let [color, Setcolor] = useState('');
    let [background, SetBackground] = useState("#81C784");
    let [textColor, SetTextcolor] = useState("");

    /*Tells when the api need to be called*/
    let [getApi, setGetApi] = useState(0);

    /*Value of the filter applied*/
    let [publicationFilterValue, setPublicationFilterValue] = useState("");
    let [branchFilterValue, setBranchFilterValue] = useState("");
    let [publishedByFilterValue, setPublishedByFilterValue] = useState("");
    let [c_j_bFilterValue, setc_j_bFilterValue] = useState("ALL");

    let [yearFilterValue, setYearFilterValue] = useState("");

    let [nationalityFilterValue, setNationalityFilterValue] = useState("");
    let [authorsFilterValue, setAuthorsFilterValue] = useState("")

    let [scopusFilterValue, setScopusFilterValue] = useState("");
    let [startDate, setStartDate] = useState("")
    let [endDate, setEndDate] = useState("")

    const [show, setShow] = useState(false)
    let [jobs, setJobs] = useState(["ALL","C","J","B","BC"])
    let [authors, setAuthors] = useState(["ALL", "Single", "First", "Second", "Third", "Fourth", "Fifth", "Others"])
    // let [verdicts, setVerdict] = useState(['All',"ACCEPTED", "WRONG ANSWER","TIME LIMIT EXCEEDED","RUNTIME ERROR","PENDING","OTHER","COMPILATION ERROR"]);
    // let [languages, setLanguage] = useState(['All',"CPP", "C#", "JAVA", "JAVASCRIPT", "PYTHON"]);

    /*Pagination Data*/
    let [pageNo, setPageNo] = useState(1);
    let [perPage, setPerPage] = useState(10);
    // let [startMonth, setStartMonth] = useState("");
    // let [startYear, setStartYear] = useState("");
    // let [endMonth, setEndMonth] = useState("");
    // let [endYear, setEndYear] = useState("");
    let [Required, setRequired] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true) };
    const handleSearch = () => { if (startDate && endDate) { setYearFilterValue("") ; setGetApi(getApi + 1); setShow(false)} };

    // const CalendarContainer = ({ children }) => {
    //     const el = document.getElementById("calendar-portal");

    //     return <Portal container={el}>{children}</Portal>;
    // };




    /*List for Filter Dropdown*/
    // let yesNo = ['All', 'Yes', 'No']

    const formRef = useRef();
    const DownloadData = [];

    // const onDownload = useDownloadExcel({
    //     currentTableRef: tableRef.current,
    //     filename: 'Users table',
    //     sheet: 'Users'
    // })

    const handleChange = (event, v) => {
        // console.log(v)
        setPageNo(v)
        setGetApi(getApi + 1)

    }
    const fun = (e) => {
        var isod = new Date(e).toLocaleDateString().split('/');
        return isod[2]
    }
    const handleClear = () => {
        setEndDate("")
        // setEndMonth("")
        // setEndYear("")
        setStartDate("")
        // setStartMonth("")
        // setStartYear("")
        setRequired(false)
        setAuthorsFilterValue("ALL")
        setBranchFilterValue("")
        setNationalityFilterValue("")
        setPublicationFilterValue("")
        setPublishedByFilterValue("")
        setScopusFilterValue("")
        setYearFilterValue("")
        setc_j_bFilterValue("ALL")
        setGetApi(0)
        setPerPage(10)
        setPageNo(1)
    }

    useEffect(() => {
        // console.log("IN USEEFFECT")
        // setShow(false)
        let tokens = localStorage.getItem("token")
        if (!tokens) {
            navigate("/login")
        }
        service.get("api/data?title=" + publicationFilterValue + "&branch=" + branchFilterValue + "&username=" + publishedByFilterValue + "&cjb=" + (c_j_bFilterValue==="ALL"?"":c_j_bFilterValue) + "&year=" + yearFilterValue + "&nationality=" + nationalityFilterValue + "&scl=" + scopusFilterValue + "&author_no=" + (authorsFilterValue === "ALL" ? "" : authorsFilterValue) + "&page=" + pageNo + "&limit=" + perPage + "&startDate=" + startDate + "&endDate=" + endDate).then((json) => {
            console.log("JSON", json)
            setData(json.docs);
            setPageData(json.limit == 0 ? 1 : json.pages)
            // setEndDate("")
            // setEndMonth("")
            // setEndYear("")
            // setStartDate("")
            // setStartMonth("")
            // setStartYear("")
            // setRequired(false)
            // DownloadData.push
            // for(let ele of json.docs){
            //     docs
            // }

        }).catch((error) => {

            console.log(error);
        });
    }, [getApi])

    return (

        <>
            <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Range Date Search</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-green">
                    {/* <HelpModal/> */}
                    {/* <form id="date-entry" ref={formRef} onSubmit={handleSearch}> */}
                    {Required ? <b style={{ "color": "red" }}>Both the fields are required to search*</b> : ""}
                    <Center><DatePicker
                        selected={startDate}
                        onChange={(date) => { setStartDate(date); console.log("DATE", date) }}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                    //   required="true"
                    /> to <DatePicker
                            selected={endDate}
                            onChange={(date) => { setEndDate(date); console.log("DATE", date) }}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                        // required="true"
                        // onChangeRaw={(event) => console.log(event.target.value)}
                        />
                        <br />
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={() => { (startDate != "" && endDate != "") ? handleSearch() : setRequired(true) }}>
                            Search
                        </Button>
                    </Center>
                    {/* </form> */}
                </Modal.Body>
                {/* <Modal.Footer><
          <Button variant="contained" color="primary" onClick={handleClose}>
            Search
          </Button>
        </Modal.Footer> */}
            </Modal>
            <HomeNavbar />
            <div className="p-3" style={{
                height: 0<data.length && data.length<10?"90vh":"100%",
                width: "99vw",
                "backgroundColor": "#c5d299"
            }}>


                {/* <CSVLink
  data={data}
  filename={"my-file.csv"}
  className="btn btn-primary"
  target="_blank"
>
  Download me
</CSVLink> */}
                <br />
                <MDBRow>
                    <MDBCol md="4">
                        <ExportCSV csvData={data} fileName={"Publications"} />
                    </MDBCol>
                    <MDBCol md="4" >
                        <Button size="large" variant="contained" color='secondary' onClick={handleShow}>Advance Search</Button>
                    </MDBCol>
                    <MDBCol md="4">
                        <Button size="large" variant="contained" color='error' onClick={handleClear}>Clear Filter</Button>
                    </MDBCol>
                </MDBRow>
                <br />
                {/* <Button variant="contained" color='secondary' onClick={onDownload}>Download</Button>
<table  ref={tableRef}>
                  <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Edison</td>
                        <td>Padilla</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Alberto</td>
                        <td>Lopez</td>
                        <td>94</td>
                    </tr>
                  </tbody>
                </table> */}
                <ReactTableFixedColumns
                    // ref={tableRef}
                    sortable={false}
                    data={data}
                    pageSize={data?.length || perPage}
                    showPagination={false}
                    columns={[
                        {
                            Header: "No",
                            id: "index",
                            accessor: "",
                            Cell: (row) => {
                                //   console.log(row)
                                return <div>{((pageNo - 1) * perPage) + row.index + 1}</div>;
                            },
                            // Cell: e =>{},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? 'white' : 'white',
                                        background: "#548C42",
                                    },
                                };
                            },
                            minWidth: 50,
                            fixed: 'left'
                        },
                        {
                            Header: () => (<div>Publication<br /><input type="text" id="publication" name="publication" onKeyPress={(e) => { if (e.key === "Enter") { setGetApi(getApi + 1); setPageNo(1) } }} onChange={(e) => { setPublicationFilterValue(e.target.value); }} /></div>),
                            accessor: "title",
                            disableSortBy: true,
                            // Cell: e =>{e.original.title},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? 'white' : 'white',
                                        background: "#8CAB3D",
                                    },
                                };
                            },
                            minWidth: 237,
                            fixed: 'left'
                        },
                        {
                            Header: () => (<div>Branch<br /><input size="sm" type="text" id="branch" name="branch" onKeyPress={(e) => { if (e.key === "Enter") { setGetApi(getApi + 1); setPageNo(1) } }} onChange={(e) => { setBranchFilterValue(e.target.value); }} /></div>),
                            accessor: "branch",
                            //Cell: e =>{e.original.title},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#A6BE87",
                                    },
                                };
                            },
                            minWidth: 100
                        },
                        {
                            Header: () => (<div>Authors<br /><input type="text" id="published_by" name="published_by" onKeyPress={(e) => { if (e.key === "Enter") { setGetApi(getApi + 1); setPageNo(1) } }} onChange={(e) => { setPublishedByFilterValue(e.target.value); }} /></div>),
                            accessor: "username",
                            //Cell: e =>{e.original.username},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#C3D496",
                                    },
                                };
                            },
                            minWidth: 210
                        },
                        {
                            Header: () => (<div>C/J/B/BC<br /><select id="c_j_b" onChange={(e) => { setc_j_bFilterValue(e.target.value); setGetApi(getApi + 1); setPageNo(1) }} >{jobs.map(verdict => { return (<option value={verdict}> {verdict} </option>) })}</select></div>),
                            accessor: "cjb",
                            //Cell: e => {e.original.cjb},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#F0F7E6",
                                    },
                                };
                            },
                            //minWidth: 140
                        },
                        {
                            Header: "Name of C/J/B/BC",
                            accessor: "name_cjb",
                            //Cell: e => {e.original.name_cjb},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#A6BE87",
                                    },
                                };
                            },
                            minWidth: 210
                        },
                        {
                            Header: "Volume",
                            accessor: "vol",
                            //Cell: e =>{e.original.vol},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#C3D496",
                                    },
                                };
                            },
                            //minWidth: 210
                        },
                        {
                            Header: "Issue",
                            accessor: "issue",
                            //Cell: e =>{e.original.issue},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#F0F7E6",
                                    },
                                };
                            },
                            //minWidth: 140
                        },
                        {
                            Header: () => (<div>Year<br /><input type="text" id="year" name="year" onKeyPress={(e) => { if (e.key === "Enter") { setGetApi(getApi + 1); setPageNo(1) } }} onChange={(e) => { setYearFilterValue(e.target.value); }} /></div>),
                            accessor: "year",
                            Cell: e => <a>{fun(e.original.year)}</a>,
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#A6BE87",
                                    },
                                };
                            },
                            //minWidth: 420
                        },
                          {  
                            Header: "Month",
                            accessor: "month",
                            //Cell: e =>{e.original.month},
                            getProps: (state, rowInfo, column) => {
                              return {
                                style: {
                                  color: (rowInfo?.original?.my) ? color : textColor,
                                  background: rowInfo?.original?.my ? background : "#C3D496",
                                },
                              };
                            },
                        // minWidth: 210
                          },
                        {
                            Header: "ISSN/ISBN/DOI",
                            accessor: "doi",
                            //Cell: e =>{e.original.doi},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#C3D496",
                                    },
                                };
                            },
                            minWidth: 140
                        },
                        {
                            Header: () => (<div>Inter/National<br /><input type="text" id="nationality" name="nationality" onKeyPress={(e) => { if (e.key === "Enter") { setGetApi(getApi + 1); setPageNo(1) } }} onChange={(e) => { setNationalityFilterValue(e.target.value); }} /></div>),
                            accessor: "nationality",
                            //Cell: e =>{e.original.nationality},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#F0F7E6",
                                    },
                                };
                            },
                            minWidth: 140
                        },
                        {
                            Header: "Organizor",
                            accessor: "organised_by",
                            //Cell: e =>{e.original.organised_by},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#A6BE87",
                                    },
                                };
                            },
                            //minWidth: 210
                        },
                        {
                            Header: "In Proceedings",
                            accessor: "is_proceeding",
                            //Cell: e =>{e.original.is_proceeding},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#C3D496",
                                    },
                                };
                            },
                            //minWidth: 140
                        },
                        {
                            Header: "Abstract Published",
                            accessor: "is_published",
                            //Cell: e =>{e.original.is_published},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#F0F7E6",
                                    },
                                };
                            },
                            //minWidth: 420
                        },
                        {
                            Header: () => (<div>SCI/Scopus/WoS/Others<br /><input type="text" id="problem" name="problem" onKeyPress={(e) => { if (e.key === "Enter") { setGetApi(getApi + 1); setPageNo(1) } }} onChange={(e) => { setScopusFilterValue(e.target.value); }} /></div>),
                            accessor: "scl",
                            //Cell: e =>{e.original.scl},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#A6BE87",
                                    },
                                };
                            },
                            //minWidth: 210
                        },
                        {
                            Header: "Citation in Scopus/WoS",
                            accessor: "citation_scopus",
                            //Cell: e =>{e.original.citation_scopus},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#C3D496",
                                    },
                                };
                            },
                            //minWidth: 140
                        },
                        {
                            Header: "Citation in GoogleScholar",
                            accessor: "citation_google",
                            //Cell: e =>{e.original.citation_google},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#F0F7E6",
                                    },
                                };
                            },
                            //minWidth: 420
                        },
                        {
                            Header: "Link",
                            accessor: "link",
                            Cell: e => <a href={e.original.link} color={textColor} target="_blank"> {e.original.link} </a>,
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#A6BE87",
                                    },
                                };
                            },
                            minWidth: 210
                        },
                        {
                            Header: "Affiliated?",
                            accessor: "is_affilated",
                            //Cell: e =>{e.original.is_affilated},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#C3D496",
                                    },
                                };
                            },
                            //minWidth: 140
                        },
                        {
                            Header: () => (<div>Are you author?<br /><select id="author" onChange={(e) => { setAuthorsFilterValue(e.target.value); setGetApi(getApi + 1); setPageNo(1) }} >{authors.map(verdict => { return (<option value={verdict}> {verdict} </option>) })}</select></div>),
                            accessor: "author_no",
                            //Cell: e =>{e.original.author_no},

                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#F0F7E6",
                                    },
                                };
                            },
                            //minWidth: 420
                        },
                        {
                            Header: "Page Number",
                            accessor: "page-number",
                            Cell: e => <a>{e.original.starting_page + "-" + e.original.ending_page}</a>,
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#A6BE87",
                                    },
                                };
                            },
                            //minWidth: 210
                        },
                        {
                            Header: "Article Cite",
                            accessor: "cite",
                            tipText: e => <a>{e.original.cite}</a>,
                            //Cell: e =>{e.original.cite},
                            getProps: (state, rowInfo, column) => {
                                return {
                                    style: {
                                        color: (rowInfo?.original?.my) ? color : textColor,
                                        background: rowInfo?.original?.my ? background : "#C3D496",
                                    },
                                };
                            },
                            minWidth: 420
                        },
                    ]}
                    className=" -highlight text-dark h5"
                />
                <Stack className="float-end" spacing={1}>
                    <Pagination
                        count={pageData}
                        color="primary"
                        defaultPage={1}
                        page={pageNo}
                        onChange={handleChange}

                    />
                </Stack>
                <div><select name="pagesize" id="pagesize" onChange={(e) => { setPerPage(e.target.value); setGetApi(getApi + 1); setPageNo(1) }}><option value={10}>10</option><option value={20}>20</option><option value={50}>50</option><option value={100}>100</option><option value={0}>ALL</option></select></div>
            </div>
        </>
    );
}
export default Publications2;