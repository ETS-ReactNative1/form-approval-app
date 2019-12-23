# Form Approval App

Sample application for government officials to approve and reject forms.

This app is built using Ionic React, and consumes data from a DRF API hosted on AWS.


The app contains 3 seperate user roles. The authorization and re-direction is handled by the higher-level Route components in `src/App.js`. 
User state management is handled by React Context in `src/context`. React Context is also used, together with native SQLite storage, to handle the DRF authentication token.

Components and pages that are shared across all/several user roles can be found in the `src/components` and `src/pages` directories.



