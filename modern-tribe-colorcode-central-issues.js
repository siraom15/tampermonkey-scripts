// ==UserScript==
// @name         Color-code issues
// @namespace    http://central.tri.be/
// @version      0.1
// @description  Adds anchor tags to some links in central
// @author       Matthew Batchelder
// @include      /^https:\/\/central.tri.be(\/.*)?/
// @grant        none
// ==/UserScript==

var central_issue_colors = {};

( function( $, my ) {
    my.init = function() {
        my.$issues = $( 'tr.issue' );
        
        my.$issues.each( function() {
            var $issue = $( this );
            var $status = $issue.find( '.status' );
            var $tracker = $issue.find( '.tracker' );
            
            var color = 'transparent';
            var text = '#000';
            
            switch ( $status.text() ) {
                case 'Complete':
                    color = '#91be9c';
                    text = '#fff';
                    break;
                case 'Declined':
                    color = '#969696';
                    text = '#fff';
                    break;
                case 'In Progress':
                    color = '#bfd4f2';
                    break;
                case 'New':
                    color = '#ffffe2';
                    break;
                case 'On Hold':
                    color = '#dbc7e3';
                    break;
                case 'Pending Code Review':
                    color = '#bfe5bf';
                    break;
                case 'Pending Customer':
                    color = '#e2c688';
                    break;
                case 'Pending Documentation':
                    color = '#f0a7f1';
                    break;
                case 'Pending Final Signoff':
                    color = '#ccbfa2';
                    break;
                case 'Pending Manager':
                    color = '#76dbdf';
                    break;
                case 'Pending Merge':
                    color = '#009800';
                    text = '#fff';
                    break;
                case 'Pending QA':
                    color = '#fad8c7';
                    break;
                case 'Pending Release':
                    color = '#7e987b';
                    text = '#fff';
                    break;
                case 'Pending Smoketest':
                    color = '#e9b398';
                    break;
                case 'Proposed':
                    color = '#fffff6';
                    break;
            }
            
            $status.css( {
                'background-color': color,
                'color': text
            } );
            
            color = 'transparent';
            text = '#000';

            switch ( $tracker.text() ) {
                case 'Bug':
                    color = '#fff6f6';
                    break;
                case 'Feature':
                    color = '#def0fd';
                    break;
            }
            
            $tracker.css( {
                'background-color': color,
                'color': text
            } );
        } );
    };
    
    $( function() {
        my.init();
    });
} )( jQuery, central_issue_colors );