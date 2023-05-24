import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

const Uploads = () => (
    <Uploady destination={{ url: "https://my-server.com/upload" }}>
        <UploadButton/>
    </Uploady>
);