import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./index";

const Footer = () => {
return (
	<Box>

	<Container>
		<Row>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="#">Help Center</FooterLink>
			<FooterLink href="#">Our COVID-19 response</FooterLink>
			<FooterLink href="#">Safety information</FooterLink>
            <FooterLink href="#">Cancellation options</FooterLink>

		</Column>
		<Column>
			<Heading>Community</Heading>
			<FooterLink href="#">Join travellers's community</FooterLink>
			<FooterLink href="#">Join service providers's community</FooterLink>
		
		</Column>
		<Column>
			<Heading>About</Heading>
			<FooterLink href="#">How to book</FooterLink>
			<FooterLink href="#">Contact us</FooterLink>
			<FooterLink href="#">About us</FooterLink>
			<FooterLink href="#">Career</FooterLink>
		</Column>
		<Column>
			<Heading>Follow Us</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

