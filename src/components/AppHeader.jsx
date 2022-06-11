export const AppHeader = () => {

    const date = new Date();

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    return (
        <div>
            <h1>Currency Conversion</h1>
            <span>{date.toLocaleString('en-US', options)}</span>
        </div>
    )
}