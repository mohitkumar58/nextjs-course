import Link from 'next/link';

function ClientsPage() {

    const clients = [
        {id: 'max', name: 'Maximum'},
        {id: 'min', name: 'Minimum'},
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <div>
          <ul>
            {clients.map(client => (
                <li key={client.id}>
                    {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                    <Link href={{

                        pathname: "/clients/[id]",
                        query: { id: client.id },
                        
                    }}>{client.name}</Link>
                </li>
            ))}
          </ul>
        </div>
        </div>
    )
}

export default ClientsPage