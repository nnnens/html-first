import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './static/style/normalize.css';
import './static/style/base.css';


import App from './layout/app.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)



