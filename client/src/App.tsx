import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/products";
import Customers from "./scenes/customers";
import Transactions from "./scenes/transactions";
import Geography from "./scenes/geography";
import Overview from "./scenes/overview";
import Daily from "./scenes/daily";
import Monthly from "./scenes/monthly";
import Breakdown from "./scenes/breakdown";
import Admin from "./scenes/admin";
import Performance from "./scenes/performance";
// ✅ IMPORTE O LOGIN
import Login from "./scenes/login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function App() {
  const mode = useSelector((state: any) => state.global.mode);
  const user = useSelector((state: any) => state.global.user);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* ✅ ROTA DE LOGIN */}
            <Route path="/login" element={<Login />} />
            
            {/* ✅ ROTAS PROTEGIDAS - SÓ ACESSÍVEL COM USUÁRIO LOGADO */}
            <Route 
              path="/" 
              element={user ? <Layout /> : <Navigate to="/login" replace />}
            >
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Rotas em português SEM acentos e SEM codificação */}
              <Route path="/produtos" element={<Products />} />
              <Route path="/clientes" element={<Customers />} />
              <Route path="/transacoes" element={<Transactions />} />
              <Route path="/geografia" element={<Geography />} />
              <Route path="/visao-geral" element={<Overview />} />
              <Route path="/diario" element={<Daily />} />
              <Route path="/mensal" element={<Monthly />} />
              <Route path="/detalhamento" element={<Breakdown />} />
              <Route path="/administracao" element={<Admin />} />
              <Route path="/desempenho" element={<Performance />} />
              
              {/* Rotas em inglês (opcionais - pode remover se quiser só português) */}
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
            
            {/* ✅ Redirecionamento para fallback */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;