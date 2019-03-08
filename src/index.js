import Key from "../key"
import React from 'react';
import ReactDOM from "react-dom"
import axios from "axios";

let api="https://api.nytimes.com/svc/topstories/v2/";
const values=["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "national", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world"]

class SinglePageApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			searchTerm: "",
			searchResults: [],
			section: "home",
			results: [],
			showAll: false,
			loading: true
		}
	}

	componentDidMount(){
		return axios.get(`${api}${this.state.section}.json?api-key=${Key}`)
		.then((response)=>{
			this.setState({searchResults: response.data.results.slice(0, 10), results: response.data.results, loading: false})
		})
	}

	search(e){
		this.setState({searchTerm: e, searchResults: this.state.results.filter((term)=>{
				return term.title.toLowerCase().indexOf(e.toLowerCase())!==-1
			}).slice(0, 10)
		})
	}

	changeSection(e){
		this.setState({section: e}, ()=>{
			console.log("1")
			return axios.get(`${api}${this.state.section}.json?api-key=${Key}`)
			.then((response)=>{
				console.log("response", response)
				this.setState({searchResults: response.data.results.slice(0, 10), results: response.data.results})
			})
		})
	}

	toggle(){
		if (this.state.searchResults.length>10){
			this.setState({searchResults: this.state.results.filter((term)=>{
				return term.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase())!==-1
			}).slice(0, 10), showAll: false})
		}
		else{
			this.setState({searchResults: this.state.results.filter((term)=>{
				return term.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase())!==-1
			}), showAll: true})
		}
	}

	render(){
		return (
			<div className="container form-horizontal">
				<h1 className="text-center">New York Times Top News</h1>
				<div className="form-group">
					<label className="col-xs-2 control-label">Section </label>
					<div className="col-xs-7">
						<select value={this.state.section} onChange={(event)=>this.changeSection(event.target.value)} className="form-control">
							{values.map((value)=>{
								return (
									<option key={value} value={value}>
									{value[0].toUpperCase()+value.slice(1)}
									</option>
								)
							})}
						</select>
					</div>
				</div>
				<div className="form-group">
					<label className="col-xs-2 control-label">Search </label>
					<div className="col-xs-7">
						<input type="text" value={this.state.searchTerm} onChange={(event)=>this.search(event.target.value)} className="form-control"/>
					</div>
					<div className="col-xs-3 no-padding">
						<label className="control-label">Showing {this.state.searchResults.length}/{this.state.results.length} results</label>
					</div>
				</div>
				<div className="row">
					{this.state.searchResults.length?
						this.state.searchResults.map((result, index)=>{
						return (
							<div key={result.create_date} className="col-sm-6 col-xs-12 news-group">
								<a href={result.url}>
									<h4>{result.title}</h4>
								</a>
								<p>Published {new Date(result.published_date).toLocaleString()}</p>
								<p className="abstract">{result.abstract}</p>
							</div>
							)
					}):this.state.loading?
						<h2 className="text-center">Loading...</h2>:<h2 className="text-center">No Matching Articles</h2>}
				</div>
				<a className="text-center toggle" onClick={()=>this.toggle()}>{this.state.showAll?"Trim Results..":"Show All Results.."}</a>
			</div>
			)
	}
}

ReactDOM.render(<SinglePageApp/>, document.getElementById("start"))