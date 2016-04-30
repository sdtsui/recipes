import React from 'react';
// It's important to not define HelloWorld component right in this file
// because in that case it will do full page reload on change
import SiteNotFound from './404Page/Index.jsx';


React.render(<SiteNotFound />, document.getElementById('react-root'));


