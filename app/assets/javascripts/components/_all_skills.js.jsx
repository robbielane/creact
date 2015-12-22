var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  // handleUpdate(skill) {
  //   console.log(skill, 'In handleUpdate!')
  // },

  onUpdate(skill) {
    this.props.onUpdate(skill);
  },

  render() {
    var skills = this.props.skills.map((skill, index) => {
      return (
        <div key={skill.id} className="skill">
          <Skill skill={skill}
                 handleDelete={this.handleDelete.bind(this, skill.id)}
                 handleUpdate={this.onUpdate} />
        </div>
      )
    });
    return(
      <div>
        {skills}
      </div>
    )
  }
});
