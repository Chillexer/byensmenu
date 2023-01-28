const GoogleMaps = () => {
	return (
		<div className="flex justify-center">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d557.4508487216063!2d12.196392086120841!3d56.02207727638513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465215b9a964255b%3A0xb900bfe04ba8a003!2sByens%20Pizzeria!5e0!3m2!1sda!2sdk!4v1674931959463!5m2!1sda!2sdk"
				width="300"
				height="300"
				className="border-0"
				title="GoogleMaps"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default GoogleMaps;
