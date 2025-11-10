import React from 'react';
import './Usuario.css';

const Dashboard: React.FC = () => {
  const users = [
    { id: '#1', email: 'email@teste.com', status: 'Ativo' },
    { id: '#2', email: 'email@teste.com', status: 'Bloqueado' },
    { id: '#4', email: 'email@teste.com', status: 'Ativo' },
    { id: '#5', email: 'email@teste.com', status: 'Ativo' },
  ];

  return (
    <div className="app-container">
      <div className="app-body">
        <main className="main-content">
          <section className="stats-cards">
            <div className="stat-card dark">
              <div>Posts</div>
              <div className="stat-value">128</div>
            </div>
            <div className="stat-card dark">
              <div>Visualizações</div>
              <div className="stat-value">54k</div>
            </div>
            <div className="stat-card light">
              <div>Inscritos</div>
              <div className="stat-value">54k</div>
            </div>
            <div className="stat-card light">
              <div>Pendências</div>
              <div className="stat-value">7</div>
            </div>
          </section>

          <section className="content-box">
            <h3>Usuários</h3>
            <div className="user-filters">
              <input type="text" placeholder="Buscar..." />
              <input type="password" placeholder="Senha" />
            </div>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>E-mail</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>
                      <button className={`btn btn-outline ${user.status === 'Bloqueado' ? 'btn-green' : 'btn-red'}`}>
                        {user.status === 'Bloqueado' ? 'Desbloquear' : 'Bloquear'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;