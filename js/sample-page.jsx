import React from "react";
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";
import DropZoneComponent from 'react-dropzone-component'
import Upload from './Upload'

// Shims, for now:
let
  // Configuration and setup for DropZoneComponent
  componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif', 'tif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
  },
  eventHandlers = {
    // This one receives the dropzone object as the first parameter
    // and can be used to additional work with the dropzone.js
    // object
    init: null,
    // All of these receive the event as first parameter:
    drop: null,
    dragstart: null,
    dragend: null,
    dragenter: null,
    dragover: null,
    dragleave: null,
    // All of these receive the file as first parameter:
    addedfile: null,
    removedfile: null,
    thumbnail: null,
    error: null,
    processing: null,
    uploadprogress: null,
    sending: null,
    success: null,
    complete: null,
    canceled: null,
    maxfilesreached: null,
    maxfilesexceeded: null,
    // All of these receive a list of files as first parameter
    // and are only called if the uploadMultiple option
    // in djsConfig is true:
    processingmultiple: null,
    sendingmultiple: null,
    successmultiple: null,
    completemultiple: null,
    canceledmultiple: null,
    // Special Events
    totaluploadprogress: null,
    reset: null,
    queuecomplete: null
    },
    djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif,image/tiff"
    };

// end local variables


const brandName = "Scene:History";
const brand = <span>{brandName}</span>;

const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    Saint Joseph's College<br/>
    Rensselaer IN 47978<br/>
    +1 (219) 866-6000
  </address>
);


const sampleCode = `  componentDidMount: function() {
    this.loadRecordsFromServer();
    // This polls the server; not quite sure why . . .
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div>
        <center><h2>Current image data</h2></center>
        <SearchBar />
        <Griddle results={this.state.records}
          columns={['title','filename', "description"]}
          columnMetadata={customColumnMetadata}
          showSettings={true}
          />
      </div>
    )}
  });
`;


export default (props) => {
  return (
    <Page>

      <Navbar brand={brand}>
        <NavItem><Link to="Home" className="nav-link">Home</Link></NavItem>
        <NavItem dropdown={true}>
          <DropdownToggle>Other Pages</DropdownToggle>
          <DropdownMenu>
            <a href="http://oscon-sb.saintjoe-cs.org:5000" className="dropdown-item" target="_blank">
              Current Page
            </a>
            <a href="http://oscon.saintjoe-cs.org:8000" className="dropdown-item" target="_blank">
              Older page
            </a>
          </DropdownMenu>
        </NavItem>
      </Navbar>

      <Hero backgroundImage="img/background.png"
        className="text-xs-center">
        <h1 className="display-4"> All about historical images </h1>
        <p className="lead">This page built in less than an hour.
          No more redundant code. Easily extensible.</p>
        <p>
          <a href="https://github.com/Danilo-Zekovic/oscon16.git" target="_blank" className="btn btn-white">
            Get it on Github
          </a>
        </p>
      </Hero>

      <Section className="subhero">
        <ImageList centered>
          <ImageListItem src="img/press/cnn-logo.png" url="http://www.cnn.com"/>
          <ImageListItem src="img/press/forbes-logo.png" url="http://forbes.com/"/>
          <ImageListItem src="img/press/theverge-logo.png" url="http://www.theverge.com/"/>
          <ImageListItem src="img/press/techcrunch-logo.jpg" url="http://techcrunch.com/"/>
        </ImageList>
      </Section>

      <Section className="nopad-bottom">
        <Code lang="jsx" block>{sampleCode}</Code>
      </Section>

      <Section>
        <Upload />
      </Section>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">Batteries Included</p>
            <p>Neal is based on <a href="http://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a> and ships with navbar, hero, footer, sections, horizontal split, pricing tables, customer quotes and other components you need for a landing page. No more repetitive coding! Oh, and it's easy to extend.</p>
          </div>
          <div>
            <p className="lead">Third-Party Integrations</p>
            <p>External integrations like &nbsp;
              <a href="http://www.google.com/analytics/">Google Analytics</a>,&nbsp;
              <a href="https://segment.com/">Segment</a>,&nbsp;
              <a href="https://stripe.com/">Stripe</a> and&nbsp;
              <a href="http://typeform.com">Typeform</a> are included.
              No more copying & pasting integration code, all you need is your API keys. We automatically track events when visitors navigate to different parts of your page.</p>
          </div>
          <div>
            <p className="lead">Serverless Deployment</p>
            <p>Because you are relying on react.js and third-party integration you don't need a server to host your landing page. Simply upload it to an Amazon S3 bucket, enable website hosting, and it's ready to go!</p>
          </div>
        </HorizontalSplit>
      </Section>

      <Section heading="Inline and Modal Signup components" className="gray">
        <p>Use these components to capture user data, display a payment dialog and/or send them to your own backend for handling. Of course, you could also just use a Typeform to collect user emails. </p>
        <SignupInline onSubmit={onSignup}/>
        <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
        <p>
          <a className="btn btn-primary btn-ghost" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
        </p>
      </Section>

      <Section>
        <CustomerQuotes>
          <CustomerQuote name="Paul Graham" title="YC" imageUrl="img/people/paulgraham.jpg">
            <p>What I tell founders is not to sweat the business model too much at first. The most important task at first is to build something people want. If you don't do that, it won't matter how clever your business model is.</p>
          </CustomerQuote>
          <CustomerQuote name="Elon Musk" imageUrl="img/people/elonmusk.jpg">
            <p>I came to the conclusion that we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. Really, the only thing that makes sense is to strive for greater collective enlightenment.</p>
          </CustomerQuote>
          <CustomerQuote name="Reid Hoffman" title="Linkedin" imageUrl="img/people/reidhoffman.jpg">
            <p>If you are not embarrassed by the first version of your product, you've launched too late.</p>
          </CustomerQuote>
        </CustomerQuotes>
      </Section>

      <Section>
        <Team>
          <TeamMember name="Member 1" title="Co-founder" imageUrl="img/people/grumpycat.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Member 2" title="Co-founder" imageUrl="img/people/boo.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Member 3" title="Co-founder" imageUrl="img/people/panda.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
        </Team>
      </Section>

      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com/brian.capouch"
        githubUrl="https://github.com/capouch"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
