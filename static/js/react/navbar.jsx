var Navbar = React.createClass({
    render: function() {
        return <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
		  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <a class="navbar-brand" href="#">Navbar</a>
		  <div class="collapse navbar-collapse" id="navbarNavDropdown">
		    <ul class="navbar-nav">
		      <li class="nav-item active">
			<a class="nav-link" href="#">Home <span class="sr-only"></span></a>
		      </li>
		      <li class="nav-item">
			<a class="nav-link" href="#">Community</a>
		      </li>
		      <li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			  Profile
			</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			  <a class="dropdown-item" href="#">Action</a>
			  <a class="dropdown-item" href="#">Another action</a>
			  <a class="dropdown-item" href="#">Something else here</a>
			</div>
		      </li>
		    </ul>
		  </div>
		</nav>;
    }
});
 
ReactDOM.render(<Navbar />, document.getElementById('NavContainer'));