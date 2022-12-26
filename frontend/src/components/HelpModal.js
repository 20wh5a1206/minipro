import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
// import { FormHelperText } from "material-ui/Form";

// import Modal from 'react-bootstrap/Modal';
import MenuItem from '@mui/material/MenuItem';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';

// import HomeNavbar from "../RNavbar";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Center } from '@mantine/core';

function HelpModal() {

    return (
        <>
                   <MDBContainer fluid className='h-custom'>
                   <Center>C/J/B/BC --- C-Conference, J-Journal, B-Book, BC-Book Cover<br/>
                   Are You Author? --- Select the author's position you belong. If the option is not available select Others</Center>
                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12' className='m-5'>

                            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

                                <MDBCardBody className='p-0'>
                                {/* <form id="insert-data" ref={formRef} onSubmit={onSubmit}> */}
                                    <MDBRow>

                                        <MDBCol md='6' className='p-5 bg-white'>

                                            <h3 className="fw-normal mb-5" style={{ color: '#6C9449' }}>Publication Information</h3>
                                            <TextField
                                                required
                                                id="publication"
                                                name="publication"
                                                label="Publication Name"
                                                fullWidth
                                                variant="standard"
                                                defaultValue="An Investigation of Different Machine Learning Approaches for Healthcare Analytics"
                                                helperText="The name of the publication"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                            <br/>
                                            <br/>
                                            <TextField
                                                required
                                                id="authors"
                                                name="authors"
                                                label="Authors Name"
                                                fullWidth
                                                variant="standard"
                                                defaultValue="Dr.P.S.Latha, Dr. Aruna Roa S L, Ms. Rama Devi.S"
                                                helperText="When multiple authors are present seperate the authors names with comma"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                            <br/>
                                            <br/>
                                            <MDBRow>

                                                <MDBCol md='4'>
                                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                    <InputLabel id="demo-simple-select-standard-label">C/J/B/BC</InputLabel>
                                                    <Select
                                                        labelId="c/j/b/bc"
                                                        id="c/j/b/bc"
                                                        label="C/J/B/BC"
                                                        required
                                                        defaultValue="C"
                                                helperText="C-Conference, J-Journal, B-Book, BC-Book Cover"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                                    >
                                                         {/* <FormHelperText htmlFor='render-select'>C-Conference, J-Journal, B-Book, BC-Book Cover</FormHelperText> */}
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"C"}>C</MenuItem>
                                                        <MenuItem value={"J"}>J</MenuItem>
                                                        <MenuItem value={"B"}>B</MenuItem>
                                                        <MenuItem value={"BC"}>BC</MenuItem>
                                                    </Select>
                                                    
                                                </FormControl>

                                                </MDBCol>

                                                <MDBCol md='4'>
                                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                    <InputLabel id="demo-simple-select-standard-label">Branch</InputLabel>
                                                    <Select
                                                        labelId="branch"
                                                        id="branch"
                                                        
                                                        label="Branch"
                                                        required
                                                        defaultValue="IT"
                                                helperText="Branch to which the author belongs"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"CSE"}>CSE</MenuItem>
                                                        <MenuItem value={"IT"}>IT</MenuItem>
                                                        <MenuItem value={"ECE"}>ECE</MenuItem>
                                                        <MenuItem value={"EEE"}>EEE</MenuItem>
                                                    </Select>
                                                    
                                                </FormControl>
                                                </MDBCol>
                                                <MDBCol md='4'>
                                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                    <InputLabel id="demo-simple-select-standard-label">Inter/National</InputLabel>
                                                    <Select
                                                        labelId="nationality"
                                                        id="nationality"
                                                        label="Inter/National"
                                                        required
                                                        defaultValue="National"
                                                helperText="National Level/ International of Conference"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"National"}>National</MenuItem>
                                                        <MenuItem value={"International"}>International</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </MDBCol>
                                            </MDBRow>
                                            <br/>
                                            
                                            <TextField
                                                required
                                                id="name_c-j-b"
                                                name="name_c-j-b"
                                                label="Name of C/J/B/BC"
                                                fullWidth
                                                variant="standard"
                                                defaultValue="Design Engineering"
                                                helperText="The name of the Confernce/book/journal/book cover"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                            <br/>
                                            <br/>
                                            <TextField
                                                required
                                                id="issn"
                                                name="issn"
                                                label="ISSN/ISBN/DOI"
                                                fullWidth
                                                variant="standard"
                                                defaultValue="978-93-5406-579-8"
                                                helperText="ISSN/ISBN/DOI in the respective format."
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                            <br/>
                                            <br/>
                                            <TextField
                                                required
                                                id="article-cite"
                                                name="article-cite"
                                                label="Article Cite"
                                                fullWidth
                                                variant="standard"
                                                defaultValue="Srinivasa Rao, P. A Hybrid Method for Detection of Coronavirus Through X-rays Using Convolutional Neural Networks and Support Vector Machine. Computational Intelligence in Healthcare. Springer, Cham, 2021. 305-315."
                                                helperText="Article Cite in the IEEE format"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                           

                                        </MDBCol>


                                        <MDBCol md='6' className='bg-indigo p-5'>
                                        
                                            <TextField
                                                required
                                                id="organizor"
                                                name="organizor"
                                                label="Organizor"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="R V S College of Engineering and Technology,Coimbatore, India"
                                                helperText="Organizor's details"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                            <br/>
                                            <br/>
                                            <TextField
                                                // required
                                                id="link"
                                                name="link"
                                                label="Link"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="https://www.ijarbest.com/journal/v7i9/2174"
                                                helperText="Link of the publication. Can be left Empty if not available."
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                            <br/>
                                            <br/>
                                            <MDBRow>

                                                <MDBCol md='3'>
                                                <TextField
                                                required
                                                id="vol"
                                                name="vol"
                                                label="Volume"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'  
                                                defaultValue="7"
                                                helperText="Volume Number"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}                                                                           
                                            />
                                                </MDBCol>

                                                <MDBCol md='3'>
                                                <TextField
                                                required
                                                id="issue"
                                                name="issue"
                                                label="Issue"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="9"
                                                helperText="Issue Number"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>
                                                <MDBCol md='3'>
                                                <TextField
                                                required
                                                id="year"
                                                name="year"
                                                label="Year"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="2022"
                                                helperText="Year in which publication was written"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>
                                                <MDBCol md='3'>
                                                <TextField
                                                required
                                                id="month"
                                                name="month"
                                                label="Month"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="2"
                                                helperText="Number of the month in which the publication was written"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>

                                            </MDBRow>
                                            <br/>
                                            
                                            <MDBRow>

                                                <MDBCol md='4'>
                                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                    <InputLabel id="demo-simple-select-standard-label" color='secondary'>In Proceedings?</InputLabel>
                                                    <Select
                                                        labelId="proceedings"
                                                        id="proceedings"
                                                        
                                                        label="In Proceedings?"
                                                        color='secondary'
                                                        required
                                                        defaultValue="Yes"
                                                helperText="If the publication is in proceedings Select Yes, else No"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                                        <MenuItem value={"No"}>No</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </MDBCol>

                                                <MDBCol md='4'>
                                                    {/* <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number' size='lg' id='form10' type='text' /> */}
                                                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                    <InputLabel id="demo-simple-select-standard-label" color='secondary'>Abstract Published?</InputLabel>
                                                    <Select
                                                        labelId="published"
                                                        id="published"
                                                        
                                                        label="Abstract Published?"
                                                        color='secondary'
                                                        required
                                                        defaultValue="Yes"
                                                helperText="If The abstract of publication is published select Yes, else No"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                                        <MenuItem value={"No"}>No</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </MDBCol>
                                                <MDBCol md='4'>
                                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                    <InputLabel color='secondary'>Affiliated?</InputLabel>
                                                    <Select
                                                        labelId="affiliated"
                                                        id="affiliated"
                                                        defaultValue="Yes"
                                                helperText="If the organization is Affiliated Select Yes, else No"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                                        label="Affiliated?"
                                                        color='secondary'
                                                        required
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                                        <MenuItem value={"No"}>No</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </MDBCol>
                                            </MDBRow>
                                            <br/>
                                
                                            <MDBRow>

                                                <MDBCol md='4'>
                                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                    <InputLabel id="demo-simple-select-standard-label" color='secondary'>Are You Author?</InputLabel>
                                                    <Select
                                                        labelId="author_no"
                                                        id="author_no"
                                                        defaultValue="Single"
                                                helperText="Select the author's position you belong. If the option is not available select Others"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                                        label="Are You Author?"
                                                        color='secondary'
                                                        required
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"Single"}>Single</MenuItem>
                                                        <MenuItem value={"First"}>First</MenuItem>
                                                        <MenuItem value={"Second"}>Second</MenuItem>
                                                        <MenuItem value={"Third"}>Third</MenuItem>
                                                        <MenuItem value={"Fourth"}>Fourth</MenuItem>
                                                        <MenuItem value={"Fifth"}>Fifth</MenuItem>
                                                        <MenuItem value={"Others"}>Others</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </MDBCol>

                                                <MDBCol md='4'>
                                                <TextField
                                                required
                                                id="startingPage"
                                                name="startingPage"
                                                label="Starting Page"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                type="number"
                                                defaultValue={0}
                                                helperText="Starting page of the publication. If not available mark it as 0"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>
                                                <MDBCol md='4'>
                                                <TextField
                                                required
                                                id="endingPage"
                                                name="endingPage"
                                                label="Ending Page"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                type="number"
                                                defaultValue={0}
                                                helperText="Ending page of the publication. If not available mark it as 0"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>
                                            </MDBRow>
                                            <br/>
                                            <MDBRow>

                                                <MDBCol md='4'>
                                                <TextField
                                                required
                                                id="scopus"
                                                name="scopus"
                                                label="Scopus/WoS/SCI"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="Scopus"
                                                helperText="Type of publication"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>

                                                <MDBCol md='4'>
                                                <TextField
                                                required
                                                id="citationscopus"
                                                name="citationscopus"
                                                label="Citation in Scopus/WoS"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="0"
                                                helperText="Citation Scopus/Wos Counts"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>
                                                <MDBCol md='4'>
                                                <TextField
                                                required
                                                id="citationgoogle"
                                                name="citationgoogle"
                                                label="Citation in GoogleScholar"
                                                fullWidth
                                                variant="standard"
                                                color='secondary'
                                                defaultValue="0"
                                                helperText="Citation GoogleScholar Counts"
                                                InputProps={{
                                                    readOnly: true,
                                                  }}
                                            />
                                                </MDBCol>
                                            </MDBRow>
                                            <br/>
                                            {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='' /> */}
                                            {/* <MDBBtn color='light' size='lg'>Publish insert</MDBBtn> */}
                                        </MDBCol>
                                    
                                    </MDBRow>
                                    {/* </form> */}
                                </MDBCardBody>

                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
        </>
    );
}

export default HelpModal;