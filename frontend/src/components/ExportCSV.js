import { Button } from '@mui/material';
import React from 'react'
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';
import { CSVLink } from 'react-csv';

export const ExportCSV = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const DownloadData = [];
    DownloadData.push(["Publication","Branch","Authors","C/J/B/BC","Name of C/J/B/BC","Volume","Issue","Year","Month","ISSN/ISBN/DOI","Inter/National","Organisor","In Proceedings","Abstract Published","Scopus/Wos/SCI/Others","Citation in Scopus/WoS","Citation in GoogleScholar","Link","Affiliated?", "Are you author?","Starting Page","Ending Page", "Cite Article"])
    for (let ele of csvData){
        DownloadData.push([ele.title,ele.branch,ele.username,ele.cjb,ele.name_cjb,ele.vol,ele.issue,ele.year,ele.month,ele.doi,ele.nationality,ele.organised_by,ele.is_proceeding,ele.is_published,ele.scl,ele.citation_scopus,ele.citation_google,ele.link,ele.is_affilated,ele.author_no,ele.starting_page,ele.ending_page,ele.cite])
    }

    // const exportToCSV = (csvData, fileName) => {

    //     const ws = XLSX.utils.json_to_sheet(csvData);
    //     const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    //     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    //     const data = new Blob([excelBuffer], {type: fileType});
    //     FileSaver.saveAs(data, fileName + fileExtension);
    // }

    return (
        <Button variant='contained' color='warning' size='small'>
        <CSVLink className="btn btn-default" data={DownloadData} filename={fileName}>Download</CSVLink></Button>
        
        // <Button variant="warning" onClick={(e) => exportToCSV(csvData,fileName)}>Export</Button>
    )
}