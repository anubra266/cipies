import React from "react";
import SiteLayout from "~/Layouts/General";

const index = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

index.layout = page => <SiteLayout children={page} />;

export default index;
