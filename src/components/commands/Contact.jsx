import React from "react";

export default function Contact() {
	const contacts = [
		{
			text: "Phone number",
			value: "+919079757522",
			href: " 9079757522",
		},
		{
			text: "Email",
			value: "singhharsh1362@gmail.com",
			href: "mailto:singhharsh@1362@gmail.com",
		},
	];
	return (
		<div className="w-11/12 mx-auto">
			{contacts.map(({ text, value, href }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-blackoww-200 w-36">{text}</h1>
						<a href={href} className="flex-1 underline text-black-300 ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
