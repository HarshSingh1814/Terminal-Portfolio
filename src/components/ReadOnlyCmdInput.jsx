import React from "react";
import BaseCmdInput from "./BaseCmdInput";
import CmdStatus from "./CmdStatus";
import CmdTextDisplay from "./CmdTextDisplay";

export default function ReadOnlyCmdInput({ cmd, time }) {
	return (
		<BaseCmdInput
			cmdStatus={<CmdStatus cmd={cmd} />}
			children={<CmdTextDisplay cmd={cmd} time={time} />}
		/>
	);
}