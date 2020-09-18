import * as React from "react";

const IconContrast = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-contrast" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={12} r={9} /><path d="M12 17a5 5 0 0 0 0 -10v10" /></svg>;

export default IconContrast;