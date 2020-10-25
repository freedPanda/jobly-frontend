import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg,Button } from "reactstrap";
import {useHistory,Link} from 'react-router-dom';

function CompanyCard({company}){

    const history = useHistory();

    return (
        <Card>
            <div style={{width:'100%',display:'flex'}}>
                <CardImg style={{width:"300px"}} src={company.logo_url} alt="Company Logo"/>
                
                <CardBody>
                    <CardTitle className="font-weight-bold text-start">
                        {company.name}
                    </CardTitle>
                    <CardText className="font-italic"><b>Handle: </b>{company.handle}</CardText>
                    <p>
                        {company.description}
                    </p>
                </CardBody>
            </div>
            <div style={{textAlign:'end'}}>
                <Button style={{width:"15%",marginBottom:'6px',marginRight:'6px'}}onClick={()=>history.push(`/companies/${company.handle}`)}>
                    View More
                </Button>
            </div>
        </Card>
      );
}

export default CompanyCard;